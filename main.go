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

  // func GetOtherStreams(w http.ResponseWriter, r *http.Request) {
  //   db, err := sql.Open("mysql", "user:password@/livestream?charset=utf8")
  //   streams := GetCurrentStreams("")
  //   stmt, err := db.Prepare("INSERT streamdata SET id=?,user_id=?,title=?,username=?")
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //   user,err := client.GetUsersByID(string(streams[0].UserID))
  //   displayName := strings.ToLower(string(user[0].DisplayName))
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //   res, err := stmt.Exec(string(streams[0].ID), string(streams[0].UserID), string(streams[0].Title), displayName)
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //   fmt.Println(json.Marshal(res))
  //   rows, err := db.Query("SELECT * FROM streamdata")
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //   db.Close()
  //   json.NewEncoder(w).Encode(rows)
  //
  //
  // }
  //
  // func GetOtherStream(w http.ResponseWriter, r *http.Request){
  //   db, err := sql.Open("mysql", "user:password@/livestream?charset=utf8")
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //   params := mux.Vars(r)
  //   stmt, err := db.Prepare("SELECT * FROM streamdata WHERE username=?")
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //
  //   res, err := stmt.Exec(strings.ToLower(params["user"]))
  //   if(err != nil){
  //     fmt.Printf("err")
  //   }
  //
  //   db.Close()
  //   json.NewEncoder(w).Encode(res)
  //
  // }
  //
  // func DeleteStreams(){
  //
  // }

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

    for _, item := range streams {
      userdata, err := client.GetUsersByID(string(item.UserID))
      if err != nil {
        fmt.Printf("Error getting twitch streams: %v", err)
      }
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
  // router.HandleFunc("/otherstreams", GetOtherStreams).Methods("Get")
  router.HandleFunc("/streams/{user}", GetStream).Methods("GET")
  // router.HandleFunc("/otherstreams/{user}", GetOtherStream).Methods("GET")
  log.Fatal(http.ListenAndServe(":3000", router))

}
