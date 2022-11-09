package journeydto

type CreateJourneyRequest struct {
	Title       string `json:"title" form:"title" validate:"required"`
	UserId      int    `json:"user_id" form:"user_id"`
	Description string `json:"description" form:"description" validate:"required"`
}
