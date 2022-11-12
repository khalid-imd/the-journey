package handlers

import (
	bookmarkdto "backend-journey/dto/bookmark"
	dto "backend-journey/dto/result"
	"backend-journey/models"
	"backend-journey/repositories"
	"encoding/json"
	"net/http"
	"time"

	"github.com/golang-jwt/jwt/v4"
)

type handlerBookmark struct {
	BookmarkRepository repositories.BookmarkRepository
}

func HandlerBookmark(BookmarkRepository repositories.BookmarkRepository) *handlerBookmark {
	return &handlerBookmark{BookmarkRepository}
}

func (h *handlerBookmark) CreateBookmark(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	userInfo := r.Context().Value("userInfo").(jwt.MapClaims)
	userId := int(userInfo["id"].(float64))

	var request bookmarkdto.BookmarkRequest
	err := json.NewDecoder(r.Body).Decode(&request)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		response := dto.ErrorResult{Code: http.StatusBadRequest, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
		return
	}

	CreatedAt := time.Now()

	bookmark := models.Bookmark{
		UserId:    userId,
		JourneyId: request.JourneyId,
		CreatedAt: CreatedAt,
	}

	data, err := h.BookmarkRepository.CreateBookmark(bookmark)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		response := dto.ErrorResult{Code: http.StatusInternalServerError, Message: err.Error()}
		json.NewEncoder(w).Encode(response)
	}

	bookmark, _ = h.BookmarkRepository.GetBookmark(data.ID)

	w.WriteHeader(http.StatusOK)
	response := dto.SuccessResult{Code: http.StatusOK, Data: convertResponseBookmark(data)}
	json.NewEncoder(w).Encode(response)
}

func convertResponseBookmark(u models.Bookmark) models.Bookmark {
	return models.Bookmark{
		ID:        u.ID,
		UserId:    u.UserId,
		User:      u.User,
		JourneyId: u.JourneyId,
		Journey:   u.Journey,
		CreatedAt: u.CreatedAt,
	}
}
