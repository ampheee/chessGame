package main

import (
	"chessGame/backend/typesAndFuncs"
	"context"
)

// App struct
type App struct {
	ctx context.Context
}

func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The con	text is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

func (a *App) game() (err error) {
	field := typesAndFuncs.InitField()
	for i := 0; i < 8; i++ {
		for j := 0; j < 8; j++ {
			if i%2 == 0 {
				field.GameField[i][j] = j % 2
			} else {
				field.GameField[i][j] = (j + 1) % 2
			}
		}
	}
	return nil
}
