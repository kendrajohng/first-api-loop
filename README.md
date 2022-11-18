# first-api-loop

LinkedIn Learning | "Introduction to Web APIs" | Section 3 | Loop through the response data

Purpose:  Display name of all products and images.  Using the name property and the image property.
Loop through all pdts and for each pdt display name and show image.

1) add some CSS styling into HTML code to display images nicely and remove bullets from list

2) create loop, for ()
item in loop through parsedData

3) put the previous code to display pdt name and put it in the for loop

4) move parsedData name information line into the for loop also

5) this loop with loop through all of parsedData and then it'll create a new item for each
then assign a name for each item in the list

6) replace [0] with [item] (right now we're getting the first item, we want all)

7) create pdts var that creats new list item for each one

8) html for each will be name

9) then append/add to html

10) remove quantity parameter bc we want all products

11) refresh page to see all pdts display

12) loop through again to add image for each one

13) copy and paste for loop below

14) change var name to var imageUrl

15) instead of .name we want .image

16) instead of var pdts we want var images

17) change 'li' to 'img' to create image instead of a list

18) not setting html of pdts but images

19) not adding html to this, set src attribute to be equal to value we get from image property
replace innerHTML with setAttribute('src',imageUrl);

20) then add to the page
appendChild(images);

21) refresh page to display all items and images
