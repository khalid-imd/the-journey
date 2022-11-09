package models

type User struct {
	ID       int       `json:"id"`
	FullName string    `json:"fullname" gorm:"type: varchar(255)"`
	Email    string    `json:"email" gorm:"type: varchar(255)"`
	Password string    `json:"password" gorm:"type: varchar(255)"`
	Phone    string    `json:"phone" gorm:"type: varchar(255)"`
	Address  string    `json:"address" gorm:"type: varchar(255)"`
	Journey  []Journey `json:"journey"`
}

type UserResponse struct {
	ID       int    `json:"id"`
	FullName string `json:"fullname"`
	Password string `json:"password" `
	Phone    string `json:"phone"`
	Address  string `json:"address"`
}

func (UserResponse) TableName() string {
	return "users"
}
