const prompt = require('prompt-sync')();

// VARIABLES
let budget = 100;
let cost = 0;
let spent = 0;
let pamperAct = [];
let rationalAct = [];
let allAct = [];

// WELCOME PROMPT
const username = prompt('What is your name? ');
console.log(`${username}, you are a first time mother on a budget to a newborn baby girl. Today is your lucky day! \nYour sister has offered to babysit and gifted you $100 to spend for the day. \nYou have a laundry list of errands to run but it's not often you get a free day to pamper yourself. \nLet's see how you choose to spend your free day!`);

const ready = prompt('Ready for the day? Enter [Y]es or [N]o');

const readyGameBegin = () => {
    if(ready.toUpperCase() === 'Y') {
        console.log(`Let's begin the day!`);
    }else {
        console.log(`Ready or not, the day must commence!`);
    }
};

readyGameBegin();


// 1ST ACTIVITY: HOME BREWED OR COFFE SHOP
console.log(`It's 9 a.m. and your sister has started babysitting. You're officially baby-free for the day but in dire need of caffeine.`)

const homeCoffeeShop = () => {
    const homeCoffeeShopActivity = prompt('Do you make a cup of coffee at home for free? \nOr better yet, treat yourself out to a nice iced vanilla oatmilk latte at your favorite coffee shop around the corner for $7.00? \nEnter [A] for coffee at home, [B] to treat yourself to a latte at the local coffee shop.')
    
    if (homeCoffeeShopActivity.toUpperCase() === 'A') {
        cost = 0;
        spent += cost;
        budget -= cost;
        rationalAct.push('made coffee at home');
        allAct.push('made coffee at home');
        console.log(`Economical choice there, ${username}. But hey! Caffeine is caffeine!`);
    }else if(homeCoffeeShopActivity.toUpperCase() === 'B') {
        cost =7
        spent += cost;
        budget -= cost;
        pamperAct.push('bought a $7 latte');
        allAct.push('bought a $7 latte');
        console.log(`We have an iced vanilla oatmilk latte for ${username}!`);
        console.log(`This latte didn't make too much of a dent in your wallet today, thanks to your sister. \nYou still have $${budget.toFixed(2)} to spend for the day.`)
    }else {
        console.log(`Looks like mom brain's got you. Please enter [A] or [B]`);
    };
};

homeCoffeeShop();


// 2ND ACTIVITY: DIAPER OR MASSAGE
console.log("Now that you're caffeinated, it's time to really start the day.");

const diaperMassage = () => {
    const diaperMassageActivity = prompt("Your back has been tense from carrying the baby and could do with a massage. \nOn the other hand, you\'ve put off buying more diapers and only have 10 left. \nHow do you want to spend your day? \nEnter [A] to go buy diapers, [B] to get that massage you're in dire need of.");

    if (diaperMassageActivity.toUpperCase() === 'A') {
        cost = 15;
        spent += cost;
        budget -= cost;
        rationalAct.push('bought diapers for your baby');
        allAct.push('bought diapers for your baby');
        console.log(`You're a good mother. Let's go buy your baby diapers!`);
        console.log(`${cost.toFixed(2)} well spent! You've got ${budget.toFixed(2)} for the rest of the day.`)
    }else if(diaperMassageActivity.toUpperCase() === 'B') {
        cost = 30;
        spent += cost;
        budget -= cost;
        pamperAct.push('got a massage');
        allAct.push('got a massage');
        console.log(`Let's go get that massage you well deserve!`);
        console.log(`Wow! Wasn't that lovely. The cheapest full body massage in the area for only ${cost.toFixed(2)}! \nThat leaves you with ${budget.toFixed(2)} to spend.`)
    }else {
        console.log(`Looks like mom brain's got you. Please enter [A] or [B]`);
    };
};

diaperMassage();

// 3RD ACTIVITY: GIRLS' LUNCH OR PARENTS' LUNCH
console.log("Is that your stomach growling, I hear? Let's get some lunch!");

const girlParentLunch = () => {
    const girlParentLunchActivity = prompt("\nYour parents called and asked if you could stop by the grocery store for some bananas and come over at lunch to help fix their iPad. \nA homecooked meal would be readily available if you went over. \nOn the other hand, you haven't seen your girlfriends in ages and could do with some girl time over lunch. \nEnter [A] to go to your parents for lunch, [B] to have lunch with your girlfriends.")

    if (girlParentLunchActivity.toUpperCase() === 'A') {
        cost = 5;
        spent += cost;
        budget -= cost;
        rationalAct.push('had lunch with your parents');
        allAct.push('had lunch with your parents');
        console.log(`What a good daughter! Your parents will be happy to see you.`);
        console.log(`You killed three birds with one stone: fixed their ipad, bought them bananas and had a homecooked meal!`);
    }else if(girlParentLunchActivity.toUpperCase() === 'B') {
        cost = 28;
        spent += cost;
        budget -= cost;
        pamperAct.push('caught up with your girlfriends over lunch');
        allAct.push('caught up with your girlfriends over lunch');
        console.log(`There's nothing like some good old fashioned girl time over food and drinks!`);
        console.log(`Wasn't that ${cost.toFixed(2)} meal delicious and refreshing? \nExactly what you needed to feel alive again! \nGirl time always re-energizes you!`)
    }else {
        console.log(`Looks like mom brain's got you. Please enter [A] or [B]`);
    };
};

girlParentLunch();


// 4TH ACTIVITY: NAILS OR BABY FOOD
console.log(`Wow! How time flies when you're having fun and being productive.`)

const nailsBabyFood = () => {
    const nailsBabyFoodActivity = prompt(`It's late afternoon now and you noticed you chipped your nail. \nThere's a great nail salon around the corner to get them done but feel like you should stop by home to prep baby food for the next few days. \nEnter [A] to stop by home and prep baby food, [B] to get your chipped nail fixed.`)

    if (nailsBabyFoodActivity.toUpperCase() === 'A') {
        cost = 0;
        spent += cost;
        budget -= cost;
        rationalAct.push('prepped food for your baby');
        allAct.push('prepped food for your baby');
        console.log(`Such a great mother. Let's go home and prep food for your baby!`)
    }else if(nailsBabyFoodActivity.toUpperCase() === 'B') {
        cost = 30;
        spent += cost;
        budget -= cost;
        pamperAct.push('had your nails done');
        allAct.push('had your nails done');
        if (budget <40) {
            console.log(`Your nails look nice! You sure have pampered yourself today and spent ${spent.toFixed(2)} so far, leaving you with ${budget.toFixed(2)} left from your sister. \nBut hey! Your nails were worth it. It's on your sister's dime anyway!`)
        }else if(budget < 50) {
            console.log(`Your nails were worth it! \nYou've managed pretty well with the money your sister gave you, with ${budget.toFixed(2)} left for the day.`)
        }else {
            console.log(`Let's go get your nails did, girl!`);
            console.log(`Looking fresh with the new nails and still have ${budget.toFixed(2)} to spend for the day!`);
        };
    };
};

nailsBabyFood();


// PRE 5TH ACTIVITY
console.log(`What a fulfilling day so far!`);
allAct.splice(-1,0,'and');
console.log(`You've done a lot. You've ${allAct.join(', ')}`);
console.log(`It's almost time to head home to dinner with your family. You have time to do some shopping!`);

const budgetPrompts = () => {
    if (budget < 30) {
        console.log(`Oh wait, looks like you only have ${budget.toFixed(2)} left. It's not enough to go shopping. Guess it's time to go home.`);
        process.exit();
    }else {
        console.log(`Now, it's time to think about what to shop for. You could do with some new non-maternity clothes but your baby is also outgrowing theirs.`)
    }
};

budgetPrompts();

// 5TH ACTIVITY: SHOPPING
const momBabyShopping = () => {
    const momBabyShoppingActivity = prompt(`What's it going to be? \nEnter [A] to buy some new baby clothes, [B] to get yourself some non-maternity clothes.`);

    if (momBabyShoppingActivity.toUpperCase() === 'A') {
        cost = 30;
        spent += cost;
        budget -= cost;
        rationalAct.push('bought new baby clothes');
        allAct.push('bought new baby clothes');
        console.log(`Your baby is going to look so cute in these new clothes`);
    }else if(momBabyShoppingActivity.toUpperCase() === 'B') {
        cost = 20;
        spent += cost;
        budget -= cost;
        pamperAct.push('bought yourself a new dress');
        allAct.push('bought yourself a new dress');
        console.log(`You are going to rock it in this new dress, hot mama!`);
    }else {
        console.log(`Looks like mom brain's got you. Please enter [A] or [B]`);
    };
};

momBabyShopping();


// EXIT
console.log(allAct);
allAct.splice(-3,1);
console.log(allAct);


console.log(`Wow! What an eventful day! You've done all these today: ${allAct.join(', ')}. That's a lot in one day! Looks like it's time to go home and relieve your sister and have dinner with your family.`);
process.exit();

