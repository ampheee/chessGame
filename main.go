package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
)

//go:embed frontend/dist
var assets embed.FS

func main() {
	appStartPage := NewApp()
	err := wails.Run(&options.App{
		Title:            "chessGame",
		Width:            1024,
		MinHeight:        512,
		MinWidth:         334,
		Height:           768,
		Assets:           assets,
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        appStartPage.startup,
		Bind: []interface{}{
			appStartPage,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
