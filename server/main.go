package main

import (
	"backend-journey/database"
	"backend-journey/pkg/mysql"
	"backend-journey/routes"
	"fmt"
	"net/http"

	//"os"

	//"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

func main() {

	mysql.DatabaseInit()

	database.RunMigration()

	r := mux.NewRouter()

	routes.RouteInit(r.PathPrefix("/api/v1").Subrouter())

	// r.PathPrefix("/uploads").Handler(http.StripPrefix("/uploads/", http.FileServer(http.Dir("./uploads"))))

	// var AllowedHeaders = handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"})
	// var AllowedMethods = handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "OPTIONS", "PATCH", "DELETE"})
	// var AllowedOrigins = handlers.AllowedOrigins([]string{"*"})

	// var port = os.Getenv("PORT")
	// fmt.Println("server running localhost:" + port)
	fmt.Println("server running localhost:5000")

	// Embed the setup allowed in 2 parameter on this below code ...
	//http.ListenAndServe(":"+port, handlers.CORS(AllowedHeaders, AllowedMethods, AllowedOrigins)(r))

	http.ListenAndServe("localhost:5000", r)
}
