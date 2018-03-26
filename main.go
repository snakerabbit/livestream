package main

import (
  "fmt"
  "encoding/json"
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "github.com/onestay/go-new-twitch"
  "database/sql"
  "github.com/go-sql-driver/mysql"
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


  func DeleteCurrentStreams(w http.ResponseWriter, r *http.Request){
    streams = []twitch.StreamData{}
    json.NewEncoder(w).Encode(streams)
  }


func main() {
  db, err := sql.Open("mysql", "user:password@/livestream")
  router := mux.NewRouter()
  router.HandleFunc("/streams", GetCurrentStreams).Methods("GET")
  router.HandleFunc("/streams", DeleteCurrentStreams).Methods("DELETE")
  log.Fatal(http.ListenAndServe(":3000", router))

}
