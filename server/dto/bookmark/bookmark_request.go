package bookmarkdto

import "time"

type BookmarkRequest struct {
	ID        int       `json:"id" gorm:"primary_key:auto_increment"`
	JourneyId int       `json:"journey_id" form:"journey_id" gorm:"type:int"`
	UserId    int       `json:"userId" form:"user_id" gorm:"type:int"`
	CreatedAt time.Time `json:"created_at"`
}
