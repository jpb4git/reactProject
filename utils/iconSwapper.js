import React from 'react';
import {Image } from 'react-native';

export function swapper(iconId, width = 50, height = 50) {
   
    let iconTab = [
        {
            IdMin: 200,
            IdMax: 232,
            convertedName: '28',
        },
        {
            IdMin: 300,
            IdMax: 321,
            convertedName: '45',
        },
        {
            IdMin: 500,
            IdMax: 504,
            convertedName: '22',
        },
        {
            IdMin: 520,
            IdMax: 531,
            convertedName: '22',
        },
        {
            IdMin: 600,
            IdMax: 622,
            convertedName: '68',
        },
        {
            IdMin: 701,
            IdMax: 781,
            convertedName: '61',
        },
        {
            IdMin: 800,
            IdMax: 800,
            convertedName: '01',
        },
        {
            IdMin: 801,
            IdMax: 804,
            convertedName: '17',
        },
    ];
   
    switch (true) {
        case parseInt(iconId) >= parseInt(iconTab[0].IdMin) && parseInt(iconId) <= parseInt(iconTab[0].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-28.png")} style={{ width: width, height: height,  }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[1].IdMin) && parseInt(iconId) <= parseInt(iconTab[1].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-45.png")} style={{ width: width, height: height, }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[2].IdMin) && parseInt(iconId) <= parseInt(iconTab[2].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-22.png")} style={{ width: width, height: height,  }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[3].IdMin) && parseInt(iconId) <= parseInt(iconTab[3].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-22.png")} style={{ width: width, height: height, }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[4].IdMin) && parseInt(iconId) <= parseInt(iconTab[4].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-68.png")} style={{ width: width, height: height, }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[5].IdMin) && parseInt(iconId) <= parseInt(iconTab[5].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-61.png")} style={{ width: width, height: height,  }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[6].IdMin) && parseInt(iconId) <= parseInt(iconTab[6].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-01.png")} style={{ width: width, height: height,  }} />;
            break;
        case parseInt(iconId) >= parseInt(iconTab[7].IdMin) && parseInt(iconId) <= parseInt(iconTab[7].IdMax):
            return <Image source={require("../assets/PNG/weather_icon-17.png")} style={{ width: width, height: height,  }} />;
            break;
        default: return <Image source={require("../assets/PNG/weather_icon-01.png")} style={{ width: width, height: height,  }} />;
    }
}