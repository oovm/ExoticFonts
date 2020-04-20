(* ::Package:: *)

width = 640;
render[c_] := Graphics@{
    Text[Style[c, FontFamily -> "Templars Cipher", 50], Scaled@{0.5, 0.5}],
    Text[Style[c, FontFamily -> "Helvetica", Gray], Scaled@{0, 0}]
}


GraphicsGrid[{
    render /@ CharacterRange["A", "G"],
    render /@ CharacterRange["a", "g"]
},
    Frame -> All,
    FrameStyle -> GrayLevel[0.8]
]
Export["TemplarsCipher_1.png",%, ImageSize -> {width, Automatic}, Background -> None]


GraphicsGrid[{
    render /@ CharacterRange["H", "N"],
    render /@ CharacterRange["h", "n"]
},
    Frame -> All,
    FrameStyle -> GrayLevel[0.8]
]
Export["TemplarsCipher_2.png",%, ImageSize -> {width, Automatic}, Background -> None]


GraphicsGrid[{
    render /@ CharacterRange["O", "T"],
    render /@ CharacterRange["o", "t"]
},
    Frame -> All,
    FrameStyle -> GrayLevel[0.8]
]
Export["TemplarsCipher_3.png",%, ImageSize -> {width, Automatic}, Background -> None]


GraphicsGrid[{
    render /@ CharacterRange["U", "Z"],
    render /@ CharacterRange["u", "z"]
},
    Frame -> All,
    FrameStyle -> GrayLevel[0.8]
]
Export["TemplarsCipher_4.png",%, ImageSize -> {width, Automatic}, Background -> None]


GraphicsGrid[{
    render /@ ToString /@ Range[0, 9],
    render /@ ToString /@ Range[0, 9]
},
    Frame -> All,
    FrameStyle -> GrayLevel[0.8]
]
Export["TemplarsCipher_5.png",%, ImageSize -> {width, Automatic}, Background -> None]


SystemOpen@$UserDocumentsDirectory
