# Personal project «Keksobooking»


Keksobooking is a service for placing rental ads for real estate in central Tokyo. Users are given the opportunity to post ads about their property or view ads that have already been posted.

---
#### Description of functionality

Inactive state. When opened, the page is inactive:
A gray rectangle is displayed in place of the map.
The .ad-form declaration information filling form contains the ad-form--disabled class;
All interactive elements of the .ad-form form must be locked using the disabled attribute added to them or to their parent fieldset blocks;
The form with .map __ filters filters is blocked in the same way as the .ad-form - a special class has been added to the form, and disabled attributes are added to its interactive elements;

Active state. Loading and successful initialization of the card (the card is implemented by a third-party Leaflet library) puts the page in an active state. When active, the page allows you to make changes to the form and send it to the server. After downloading data from the server, view similar ads on the map, filter them and clarify detailed information about them, showing a card for each of the ads.


*Filling in information and sending data:*
user photo;
title;
address (coordinates);
type of housing;
price per night;
number of rooms;
number of sleeping places;
check-in and check-out times;
additional options:
parking;
WiFi;
air conditioning;
kitchen;
washing machine;
elevator.
free text description;
housing photography.

All information is filled in on one page without intermediate transitions. The procedure for filling in information is not important.

After filling in all data, when you click on the "Publish" button, all data from the form, including images, is sent to the server 
https ://22.javascript.pages.academy/kexobooking using the POST method with the type multipart/form-data.

The page responds to incorrectly entered values in the form. If the data entered in the form doesn't comply with the restrictions specified in the section describing the input fields, the form cannot be sent to the server. When you try to submit a form with incorrect data, no submission occurs, and incorrectly filled fields are highlighted with a red border. 
If the form is successfully submitted or cleaned (clicking on the .ad-form __ reset button), the page, without reloading, goes into the state when:

  all completed fields are returned to their original state;
  filtering (filter status and filtered labels) is reset;
  the address label returns to its original position;
  the value of the address field is adjusted according to the initial position of the label.

If the data is sent successfully, a message is displayed. The message markup that is in the # success block within the template template must be placed in < main >. The message should disappear by pressing the Esc key and clicking on an arbitrary area of the screen.

If a query error occurs while sending data, a message is displayed. The message markup that is in the # error block of the template template must be placed in < main >. The message should disappear after pressing the .error __ button, by pressing the Esc key and by clicking on an arbitrary area of the screen. In this case, all information entered by the user is saved so that he can submit the form again.


***Restrictions Imposed on Input Fields***

Ad Title:
 Required text field;
 The minimum length is 30 characters;
 The maximum length is 100 characters.

Price per night:
 Required field;
 Numeric field;
 The maximum value is 1,000,000.

The Housing Type field affects the minimum value of the Price per Night field:
 "Bungalow" - minimum price per night 0;
 "Apartment" - minimum price per night 1,000;
 "House" - minimum price 5,000;
 "Palace" is the minimum price of 10,000.

Address: Manual editing of the field is not allowed. The value is automatically set when a special label moves around the map. The details of filling in the address field are described along with the behavior of the label.
The "Arrival time" and "Departure time" fields are synchronized: when changing the value of one field in the second, the corresponding value is highlighted. For example, if the arrival time is "after 14," then the departure time will be "up to 14" and vice versa.
The Number of Rooms field is synchronized with the Number of Spaces field so that when you select the number of rooms, you enter restrictions on the allowed choices for the number of guests:
  1 room - "for 1 guest";
  2 rooms - "for 2 guests" or "for 1 guest";
  3 rooms - "for 3 guests," "for 2 guests" or "for 1 guest";
  100 rooms - "not for guests."

The value of the fields "Your photo" and "Housing photo" can only be an image.

*Choosing an address on the map:*
The approximate address of the apartment is indicated by moving a special label along the map of Tokyo. The contents of the address field must always match the coordinates of the label.
The address field must always be filled in, including immediately after the page is activated. By default, the coordinates of the center of Tokyo are used.
The address field value format is {{x}}, {{y}}, where {{x}} and {{y}} are the coordinates of the label (provided by the map API). Fractional coordinates are rounded to five characters after the comma.

*Compare with similar ads*

The full list of similar announcements is loaded after the page goes into an active state from the server 
https ://22.javascript.pages.academy/kexobooking/data. Data from the server may not be fully received.
If a query failed while loading data from the server, you must display the appropriate message. You need to come up with the design of the block with the message yourself.
Each of the ads is shown as a label on the map.
When you click on a label of a similar announcement, a balloon is shown (provided by the map API) with detailed information about the announcement (hereinafter - the card). The card layout must be created from the .popup template element located in the template element with ID # card. Data is inserted into the card by analogy with data inserted into the template card as an example. If there is not enough data to fill in, the corresponding block in the card is hidden. For example, if you do not specify any amenities in the ad, you should hide the .popup __ features block. If there are no fields, there should be no errors.
Clicking on a special address selection label does not lead to a balun display.
At each time, only one balun can be shown, that is, clicking on the label of another similar announcement should hide the current balun if it is shown and show the balun corresponding to another announcement.
The open card with detailed information can be closed by clicking on the cross in the corner of the balun.

Objects located nearby can be filtered. Filtering is carried out when the values of the corresponding fields of the .map __ filters form change according to the same parameters that are specified for the declaration:
 type of housing;
 price per night;
 Number of rooms;
 number of guests;
 additional amenities.

Both before changing the filters and when changing the filter, all suitable options should be shown on the map, but not more than 10 labels (not counting the special one), regardless of the selected filter.
The form, which filters similar ads at the time of opening the page, is blocked and becomes available only after the download of all similar ads is completed, which in turn begin to load only after loading and successful initialization of the card.
The labels corresponding to the selected filters should be drawn no more than once every half a second (elimination of rattling).
When changing filters, the open balun (if any) must be hidden.

The announcement form shows a preview of the user's avatar and photo of the room when the values of the corresponding fields change.
The project is configured to build JavaScript using Webpack.

