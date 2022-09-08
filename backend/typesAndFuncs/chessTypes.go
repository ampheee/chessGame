package typesAndFuncs

type Figure struct {
	Priority int
}

type Field struct {
	GameField [][]int
}

type FigureActions interface {
	Move(currentPosition, priority int) (newPosition int, err error)
	Die(position int) (err error)
}

type FieldActions interface {
	Init() *Field
}
