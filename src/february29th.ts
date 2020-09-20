/**Finds out whether or not the current date is February 29th.
 * @returns {boolean} Returns true if the current date is February 29th, and false if not.*/
export function isFebruary29th(): boolean {
    const date = new Date(); //Get the date

    if ((date.getDate() === 29) && (date.getMonth() === 1)) return true; //Check if it's February 29th and return true
    else return false; //Return false otherwise
}
