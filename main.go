package main

import (
  "encoding/json"
  "log"
  "net/http"
  "github.com/gorilla/mux"
  "github.com/onestay/go-new-twitch"
  )

  type Client struct {
    ClientID string
}

  type StreamData struct {
      ID           string    `json:"id"`
      UserID       string    `json:"user_id"`
      GameID       string    `json:"game_id"`
      CommunityIds []string  `json:"community_ids"`
      Type         string    `json:"type"`
      Title        string    `json:"title"`
      ViewerCount  int       `json:"viewer_count"`
      StartedAt    time.Time `json:"started_at"`
      Language     string    `json:"language"`
      ThumbnailURL string    `json:"thumbnail_url"`
  }

  var streams []StreamData


func NewClient(cid string) *Client
func (c Client) GetStreams(i GetStreamsInput) (streams, error)

type GetStreamsInput struct {
    // Cursor for forward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
    After string `url:"after"`
    // Cursor for backward pagination: tells the server where to start fetching the next set of results, in a multi-page response.
    Before string `url:"before"`
    // Returns streams in a specified community ID. You can specify up to 100 IDs.
    CommunityID []string `url:"community_id"`
    // Maximum number of objects to return. Maximum: 100. Default: 20.
    First int `url:"first"`
    // Returns streams broadcasting a specified game ID. You can specify up to 100 IDs.
    GameID []string `url:"game_id"`
    // Stream language. You can specify up to 100 languages.
    Language []string `url:"language"`
    // Stream type: "all", "live", "vodcast". Default: "all".
    Type string `url:"type"`
    // Returns streams broadcast by one or more specified user IDs. You can specify up to 100 IDs.
    UserID []string `url:"user_id"`
    // Returns streams broadcast by one or more specified user login names. You can specify up to 100 names.
    UserLogin []string `url:"user_login"`
}

func GetPeople(w http.ResponseWriter, r *http.Request) {
  json.NewEncoder(w).Encode(streams)
}


func main() {
  router := mux.NewRouter()
  // router.HandleFunc("/streams", GetStream).Methods("GET")
  // router.HandleFunc("/streams/{id}", GetStreamData).Methods("GET")
  log.Fatal(http.ListenAndServe(":8080", router))

}
