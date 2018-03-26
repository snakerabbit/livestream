package main

import (
  "fmt"
  "encoding/json"
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "github.com/onestay/go-new-twitch"
  )



var streams []twitch.StreamData

var client = twitch.NewClient("w9go3ntxy39g3w1g3dhzwoa60ex92q")

  func GetCurrentStreams(x string) []twitch.StreamData{

    var input twitch.GetStreamsInput
    input.Type = "live"
    if(x != ""){
      var newArray []string
      newArray = append(newArray, x)
      input.UserLogin = newArray
    }
    streams, err := client.GetStreams(input)
        if err != nil {
    		fmt.Printf("Error getting twitch streams: %v", err)
    	}
    return streams
  }

  func GetStreams(w http.ResponseWriter, r *http.Request) {
    streams := GetCurrentStreams("")
    json.NewEncoder(w).Encode(streams)
  }

  func DeleteCurrentStreams(w http.ResponseWriter, r *http.Request){
    streams = []twitch.StreamData{}
    json.NewEncoder(w).Encode(streams)
  }


func main() {
  router := mux.NewRouter()
  router.HandleFunc("/streams", GetStreams).Methods("GET")
  router.HandleFunc("/streams", DeleteCurrentStreams).Methods("DELETE")
  log.Fatal(http.ListenAndServe(":3000", router))

}
