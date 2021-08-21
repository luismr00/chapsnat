# chapsnat

# Introduction

Snap Nourish is a Snap Academy final project which goal was to create a new feature as if it were to be added towards the Snapchat app itself. Beforehand, different teams of six scholars were made throughout the academy where each team had to focus on a seperate topic upon creating the new feature. Each team was composed of two scholars from each different Snap Academy which consisted of two engineers, two designers, and two storytellers. Together the whole project was group effort in creating Snap Nourish. Please note that the final outcome of the project, however, is only a prototype itself and not necessarily a final product.

As for the purpose of the feature, the project's objective was to bring awareness to Snap users about food security, educate them on healthier food choices through recipes, and provide a resource by giving them local groceries with the most affordable deals (bring awareness, educate, and provide resources). Snap has always been a company that cares for the wellbeing of their users. With the new feature, it promotes food security awareness and incorporates all of Snaps values of Smart, Kind, and Creative. By adding on to the geolocation feature we are strengthening the existing communities by helping people become food secure and increasing the usage of other established features, such as Snap Stories.

[Click here](https://drive.google.com/file/d/15b2CJ6q6WsKxXzptSPjXvsfQbYBOuj0x/view?usp=sharing) to watch our video.

# Main Features

## Snap Nourish Maps 

The following functionality is complete for the Map Screen:

* [x] Various grocery stores, food pantries, and community fridges mapped out in Boyle Heights.
* [x] Users can click on the icons and it will navigate them to a new screen where it shows multiple information the selected store has to offer. 
* [x] Locations are hard coded at the moment but with an API the feature would map over several locations if the data were to be provided by sponsoring stores partnering with Snap. 

<!-- <img src="https://i.imgur.com/agSvcgL.gif" width=200><br> -->
<p align="center">
  <img width="380" src="./assets/GIFsamQT.gif">
</p>


## Snap Nourish Grocery Store View 

The following functionality is complete for the Store Screen:

* [x] Different interfaces that a user can navigate through to find out more resources about the grocery store being clicked from the map screen. 
* [x] Buttons that allow users to navigate different interfaces. Currently only the resource, meals, and recipe buttons are functional at the moment.  
* [x] The presented data that the user is able to observe comes from a database called firebase. More info about a given grocery store would be expanded if an api would have been possible to use.   

<p align="center">
  <img width="380" src="./assets/GIFluisQT.gif">
</p>

# Installation & Setup

## Install

1. To get started, fork or clone the repo and then within the terminal inside the repo run:

```
yarn install
```

2. Next, you want to make sure to install the Expo app through your phone before being able to view the prototype. Additional info regarding Expo can be found down below under the 'Technologies Used' section.

## Set up

1. Within your terminal inside the repo, run:

```
expo start
```

2. Open the camera of your phone and scan the barcode from the link that opens immediately into your browser after running the command above. This should take you towards the Expo app to be able to view the project within your phone. 
3. Wait until Expo loads the project entirely. Then, register within the app and navigate to the map screen to see our added features.

# Technologies Used

- [React Native](https://reactnative.dev/docs/getting-started)
- [Expo](https://docs.expo.dev/index.html)
- [FireBase](https://firebase.google.com/docs)

# Project Team Members 

| Name / Role      | Link to GitHub / LinkedIn |
| ----------- | ----------- |
| Luis Rangel  / Engineer      | [LinkedIn](https://www.youtube.com/watch?v=dQw4w9WgXcQ) / [GitHub](https://github.com/luismr00)     |
| Samantha Soto / Engineer     | [LinkedIn](https://www.linkedin.com/in/samantha-soto-alejos/) / [GitHub](https://github.com/ssotoale)     |
| Lexie Williamson / Designer  | [LinkedIn](https://www.linkedin.com/in/lexiejwilliamson/)       |
| Fecilia Mesadieu / Designer  | [LinkedIn](https://www.linkedin.com/in/feliciamesadieu/)       |
| Nayeli Montano/ Story Teller | [LinkedIn](https://www.linkedin.com/in/nayeli-montano/)       |
| Anna Garcia / Story Teller   | [LinkedIn](https://www.linkedin.com/in/annangarcia/)       |

#  Acknowledgements

- [ChapSnat Template](https://github.com/Snap-Engineering-Academy-2021/chapsnat-sandbox)
- [React Native Gifted Chat](https://github.com/FaridSafi/react-native-gifted-chat)

