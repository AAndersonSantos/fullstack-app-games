import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

function MapComponent(props) {

  let lojas = props.lojas;
  let local = '';

  const state = {
    stores1: [
      { latitude: -23.504327949457682, longitude: -46.834353426149, local: "Shopping Tamboré" },
      { latitude: -23.541374679610833, longitude: -46.76599810686585, local: "Shopping União" },
      { latitude: -23.576198939846936, longitude: -46.688191202593316, local: "Shopping Iguatemi São Paulo" },
      { latitude: -23.504195753815033, longitude: -46.84834146999177, local: "Shopping Iguatemi Alphaville" }

    ],
    stores2: [
      { latitude: -23.504327949457682, longitude: -46.834353426149, local: "Shopping Tamboré" },
      { latitude: -23.541374679610833, longitude: -46.76599810686585, local: "Shopping União" }

    ],
    stores3: [
      { latitude: -23.541374679610833, longitude: -46.76599810686585, local: "Shopping União" },
      { latitude: -23.576198939846936, longitude: -46.688191202593316, local: "Shopping Iguatemi São Paulo" },
      { latitude: -23.504195753815033, longitude: -46.84834146999177, local: "Shopping Iguatemi Alphaville" }

    ],
    stores4: [
      { latitude: -23.541374679610833, longitude: -46.76599810686585, local: "Shopping União" },
      { latitude: -23.576198939846936, longitude: -46.688191202593316, local: "Shopping Iguatemi São Paulo" },
      { latitude: -23.504195753815033, longitude: -46.84834146999177, local: "Shopping Iguatemi Alphaville" },
      { latitude: -23.504327949457682, longitude: -46.834353426149, local: "Shopping Tamboré" }

    ]
  }

  switch (lojas) {
    case "Loja tambóre/Loja União/Loja Iguatemi":
      local = state.stores1;
      break;
    case "Loja tambóre/Loja União":
      local = state.stores2;
      break;
    case "Loja União/Loja Iguatemi":
      local = state.stores3;
      break;
    case "Loja União/Loja Iguatemi/Loja Tamboré":
      local = state.stores4;
      break;
    default:
      local = ''
  }

  function displayMarkers() {
    return local.map((store, index) => {
      return <Marker key={index} id={index} position={{
        lat: store.latitude,
        lng: store.longitude
      }}
      />
    })
  }

  const position = {
    lat: -23.549389114910895,
    lng: -46.63744701546784,
    local: "São Paulo"
  }

  return (
    <Map google={props.google} zoom={11} initialCenter={position}>
      {displayMarkers()}
    </Map>
  );

}

export default GoogleApiWrapper(
  (props) => ({
    apiKey: 'AIzaSyBbZkKZtHcLLZoGLarC32BgVUETa_2lTms',
  }
  ))(MapComponent)