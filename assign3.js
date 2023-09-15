//Questions from assignment 6-9
//Answer 1

var a = 10
document.write("The value of a is " + a + "<br>")
var a = ++a
document.write("")
document.write("The value of ++a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")

document.write("The value of a++ is " + a + "<br>")
var a = ++a
document.write("Now the value of a is " + a + "<br>")
document.write("")

var a = --a
document.write("The value of --a is " + a + "<br>")
document.write("Now the value of a is " + a + "<br>")
document.write("")
document.write("The value of a-- is " + a-- + "<br>")
document.write("Now the value of a is " + a + "<br>")

//Answer 2
var a = 2
var b = 1
var result = --a - --b + ++b + b--
document.write("The initial result is " + result + "<br>")
document.write("" + "<br>")
document.write("--a;1" + "<br>")
document.write("--a - --b;1" + "<br>")
document.write("--a - --b + ++b;3" + "<br>")
document.write("--a --b + ++b + b--;3" + "<br>")
document.write("" + "<br>")
document.write("a is 1" + "<br>")
document.write("b is 2" + "<br>")
document.write("result is" + result + "<br>")
document.write("" + "<br>")

//Answer 3
var nameUser = prompt("Enter Your Name...!")
alert("Hello ! " + nameUser)

//Answer 5
var num = +prompt("Enter a Number Here")
if (!num) {
    num = 5
}
console.log(num + " X 1 = " + num * 1)
console.log(num + " X 2 = " + num * 2)
console.log(num + " X 3 = " + num * 3)
console.log(num + " X 4 = " + num * 4)
console.log(num + " X 5 = " + num * 5)
console.log(num + " X 6 = " + num * 6)
console.log(num + " X 7 = " + num * 7)
console.log(num + " X 8 = " + num * 8)
console.log(num + " X 9 = " + num * 9)
console.log(num + " X 10 = " +num * 10)
console.log(num + " X 11 = " +num * 11)
console.log(num + " X 12 = " +num * 12)

//Answer 6
var sub1 = +prompt("Enter subject 1 ")
var sub2 = +prompt("Enter Subject 2")
var sub3 = +prompt("Enter Subject 3")

var totalMark = 100

var obtained1 = +prompt("Enter " + sub1 + " marks here... out of " + totalMark)
var obtained2 = +prompt("Enter " + sub2 + " marks here... out of " + totalMark)
var obtained3 = +prompt("Enter " + sub3 + " marks here... out of " + totalMark)

var obtainedTotal = obtain1 + obtain2 + obtain3
var percent = obtainedTotal * 100 / 300
var percent1 = obtained1 * 100 / 100
var percent2 = obtained2 * 100 / 100
var percent3 = obtained3 * 100 / 100

document.write("<table> <tr> <th>Subject</th> <th>Total Marks </th> <th> Obtained Marks </th> <th>Percentage</th> </tr> <tr> <td>" + subject1 + "</td> <td>" + totalMark + "</td> <td>" + obtain1 + "</td>  <td>" + percent1 + "%" + "</td> </tr> <tr> <td>" + subject2 + "</td> <td>" + totalMark + "</td> <td>" + obtain2 + "</td>  <td>" + percent2 + "%" + "</td> </tr> <tr> <td>" + subject3 + "</td> <td>" + totalMark + "</td> <td>" + obtain3 + "</td>  <td>" + percent3 + "%" + "</td> </tr>              <tr> <td> Total MArks of All subjects </td> <td>" + 300 + "</td> <td> " + obtained + "</td>  <td>" + percent + "%" + "</td> </tr> </table>")

//Questions from assignment 12-13

// Answer 1
var number = prompt("Enter Number or String")
if (number === "A") {
    alert("A = 65 & this is Uppercase")
} 
else if (number === "a") {
    alert("a = 97 & this is lowercase")
} 
else if (number === "Z") {
    alert("Z = 90 & this is Uppercase")
} 
else if (number === "z") {
    alert("z = 122 & this is lowercase")
}

// Answer 2
var int1 = +prompt("Enter 1st number")
var int2 = +prompt("Enter 2nd number")
if (int1 > int2) {
    console.log(int1 + " is larger number")
} 
else(int2 + " is larger")

// Answer 3
var numT_F = +prompt("Enter a number")
if (numT_F > 0) {
    console.log("Number is Positive")
} 
else {
    console.log("Number is Negative")
}

// Answer 4
var input = prompt("Enter a character:");
if (input == 'a' || input == 'A' || input == 'e' || input == 'E' || input == 'i' || input == 'I' || input == 'o' || input == 'O' || input == 'u' || input == 'U') {
    alert("Its a vowel");
} 
else if ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z')) {
    alert("Its a consonant");
} 
else {
    alert("Invalid input please enter an alphabet");
}

// Answer 5
var pass = "abc123"
var confirmPass = prompt("enter your password")
if (confirmPass.toLowerCase() == pass) {
    console.log("Password is correct")
} 
else {
    console.log("Password is incorrect")
}



// Answer 6
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day"
} 
else {
    greeting = "Good evening";
}


// Answer 7

var time = prompt("Enter time like this 12:00 pm")

if (time >= 0000 && time <= 1200) {
    alert("Good Morning")
} 
else if (time >= 1200 && time <= 1700) {
    alert("Good Afternoon")
} 
else if (time >= 1700 && time <= 2100) {
    alert("Good Evening")
} 
else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}

//Questions from assignment 14-16

// Answer 1
var studentName = []
studentName.push("Meerza Muhammad Wajih")

// Answer 2
var studName = [{}]
studName.push({
    studName: "Meerza Muhammad Wajih"
})

// Answer 3
var str = ["Hello World"]
console.log(str)



// Answer 4
var numb = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numb)

// Answer 5
var bool = [true, false]
console.log(bool)

// Answer 6
var mixed = ["Air Jordan", 4, true]
console.log(mixed)

// Answer 7
var qualification = ["SSC", "HSC", "BCS", "B.COM", "BBA", "MSC", "M.Phil", "PhD"]
document.write("<b> Qualification </b><br>")
document.write("1)" + qualification[0] + " <br>")
document.write("2)" + qualification[1] + " <br>")
document.write("3)" + qualification[2] + " <br>")
document.write("4)" + qualification[3] + " <br>")
document.write("5)" + qualification[4] + " <br>")
document.write("6)" + qualification[5] + " <br>")
document.write("7)" + qualification[6] + " <br>")
document.write("8)" + qualification[7] + " <br>")

// Answer 8
var studnt = ["Wajih", "Ashir", "Areeb"]

for (var i = 0; i < studnt.length; i++) {
    var studentMarks = [490, 350, 420]
    for (var j = 0; j < studntMarks.length; j++) {
        var percentage = studntMarks[i] * 100 / 500
    }
    document.write("Score of " + studnt[i] + " is " + studntMarks[i] + ". Percentage Is " + percentage + "% <br>")
}

// Answer 9
var colors = ["Violet", "Indigo", "Blue", "Green","Yellow","Orange","Red"]
console.log(colors)

// part a: Ask the user what color to add in the start
var color2start = prompt("which rainbow color you want to add at the beginning?")
colors.unshift(color2start)

// part b: Ask the user what color to add in the end
var color2end = prompt("which rainbow color you want to add at the Ending?")
colors.push(color2end)

// part c: Add two more colors at the beginning of the array
colors.unshift("White", "Black")
console.log(colors)

// part d: Delete the first color in the array
var delFirstColor = prompt("which color you want to delete from the beginning?")
colors.shift(delFirstColor)
console.log(colors)

// part e: Delete the last color in the array
var delLastColor = prompt("which color you want to delete from the end?")
colors.pop(delLastColor)
console.log(colors)

// part f: Ask user the index place where he/she desires to add color
var i;
var addColoranywhere = prompt("Choose the color and place of color which you wish to add.")
colors.splice(colors[i], 0,addColoranywhere)

// part g:
var i;
var removeColoranywhere = prompt("Choose the color and place of color which you wish to remove")
colors.splice( 0,colors[i], removeColoranywhere)

// Answer 10
var score = [320, 230, 420, 180]
document.write("Score of Students: " + score)
var score=[size];
for(var i=0 , i < size, i++){
    for(var j=i+1, j< size, j++){
        if(score[i] > score[j]){
            temp =score[i];
            score[i]=score[j];
            score[j]=temp;
        }
    }
}
var ascending = score.sort()
document.write("Ordered Score of students: " + ascending)

// Answer 11
var cityList = ["Karachi", "Lahore", "Islamabad", "Quetta", "peshawar"]
document.write("Cities list: "<br>)
for( var i=0, i < 5, i++}{
document.write(cityList[i] <br>)}

var selectedCities = cityList.slice(1, 3)
document.write("Selected cities list: "<br> + selectedCities <br>)

// Answer 12
var arr = ['This', 'is', 'my', 'cat']
arr.join(" ")


// Answer 13
var fifo_reverse = [4]
fifo_reverse[0] = "Keyboard"
fifo_reverse[1] = "Mouse"
fifo_reverse[2] = "Joystick"
fifo_reverse[3] = "C.P.U"
fifo_reverse[4] = "Speaker"
for(var i=0, i<=4,i++){
    document.write(fifo_reverse[i] + <br>)
}

// Answer 14
var fifo_reverse = [4]
fifo_reverse[0] = "Keyboard"
fifo_reverse[1] = "Mouse"
fifo_reverse[2] = "Joystick"
fifo_reverse[3] = "C.P.U"
fifo_reverse[4] = "Speaker"
for(var i=4, i>=0,i--){
    document.write(fifo_reverse[i] + <br>)
}

//  Answer 15

var phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]

document.write (<select> <option> phone[0]  </option> + <option> phone[1] </option> + <option> phone[2] </option> + <option> phone[3] </option> + <option> phone[4] </option> + <option>  phone[5] </option>  </select>  ")

