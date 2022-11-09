package journeydto

type JourneyResponse struct {
	ID          int    `json:"id"`
	Title       string `json:"title" form:"title" validate:"required"`
	UserId      int    `json:"user_id" form:"user_id" validate:"required"`
	Description string `json:"description" form:"description" validate:"required"`
}
