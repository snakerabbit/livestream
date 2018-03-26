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

  func GetCurrentStreams(w http.ResponseWriter, r *http.Request) {

    var input twitch.GetStreamsInput
    input.Type = "live"
    streams, err := client.GetStreams(input)
        if err != nil {
    		fmt.Printf("Error getting twitch streams: %v", err)
    	}
    json.NewEncoder(w).Encode(streams)
  }


func main() {
  router := mux.NewRouter()
  router.HandleFunc("/", GetCurrentStreams).Methods("GET")
  log.Fatal(http.ListenAndServe(":8080", router))

}
