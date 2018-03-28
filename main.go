package main

import (
  "fmt"
  "encoding/json"
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "github.com/onestay/go-new-twitch"
  "strings"
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

  func GetStream(w http.ResponseWriter, r *http.Request){
    var itemArray []twitch.StreamData
    streams := GetCurrentStreams("")
    params := mux.Vars(r)
    userdata, err := client.GetUsersByID(string(streams[0].UserID))
    if err != nil {
      fmt.Printf("Error getting twitch streams: %v", err)
    }

    for _, item := range streams {

      if strings.ToLower(userdata[0].DisplayName) == strings.ToLower(params["user"]){
        itemArray = append(itemArray, item)
        json.NewEncoder(w).Encode(itemArray)
        return
      }
    }
    json.NewEncoder(w).Encode(itemArray)
  }


func main() {
  router := mux.NewRouter()
  router.HandleFunc("/streams", GetStreams).Methods("GET")
  router.HandleFunc("/streams/{user}", GetStream).Methods("GET")
  log.Fatal(http.ListenAndServe(":3000", router))

}
