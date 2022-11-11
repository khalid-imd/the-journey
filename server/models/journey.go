package models

type Journey struct {
	ID          int          `json:"id" gorm:"primary_key:auto_increment"`
	Title       string       `json:"title" gorm:"type varchar(255)"`
	Image       string       `json:"image" form:"image" gorm:"type: varchar(255)"`
	UserId      int          `json:"user_id" form:"user_id"`
	User        UserResponse `json:"user" gorm:"constraint:OnUpdate:CASCADE,OnDelete:CASCADE;"`
	Description string       `json:"description" gorm:"type varchar(255)"`
}

type JourneyResponse struct {
	ID          int          `json:"id"`
	Title       string       `json:"title"`
	UserId      string       `json:"user_id"`
	User        UserResponse `json:"user"`
	Description string       `json:"description"`
}
