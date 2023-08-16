var element, progress_reach, user_query, industries, solution_type, email, phone, extra, mobile_input, message_input, email_input, email_submit, mobile_submit, message_submit, indus_value, tag, tag_div, gif, gif_div, user_div, user, option_div, option, message_title, message_div, mobile_div_inner, mobile_div, mobile_title, email_div_inner, email_div, email_title, email_error, mobile_error, indus_section, back_loading, loading_gif_var, loading_gif_leading_style;
element = document.getElementById("dogzy-chat-col-main");
progress_reach = 0;
email_error_checker = false;
$('.indus').hide();
user_query = ''
loading_gif_var = 0

// Tio remove all \n Char
setInterval(async function () {
    user_query.replace(/(\r\n|\n|\r)/gm, " ")
})

// Console all tghe Data required
setInterval(async function () {
    console.log(progress_reach, `${user_query.replace(/(\r\n|\n|\r)/gm, " ")}`, industries, solution_type, email, phone, extra, loading_gif_var);
}, 1);



// Fuction that help to scroll down
async function scroll_down() {
    window.scrollTo(0, Math.max($(document).height(), $(window).height()), 'smooth');
    loading_gif_leading_style.display = 'none';

}
// Fuction that delay the fuction exicution
async function sleep() {
    scroll_down()
    loading_gif_var++
    dogzy_img('items/loading-2.gif', `loading-${loading_gif_var}`)
    loading_gif_leading_style = document.querySelector(`.loading-${loading_gif_var}`).style;
    loading_gif_leading_style.width = '100px';
    // return new Promise(resolve => setTimeout(resolve, 500));
    await new Promise(r => setTimeout(r, 700));
    loading_gif_leading_style.display = 'none';
}



// Click Responce Function
async function resp(btn, class_name, pr) {
    $(`.${class_name}`).click(async function () {
        $(`.${class_name}`).hide();
        dogzy_user(`${btn}`);
        progress_reach = pr
        scroll_down()

    });
    await sleep(2000)

}

// Fuction to stop loop of display
async function stop_loop(pr) {
    progress_reach = -pr;
    scroll_down()
}

// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    nav: false,
    items: 1.5,
    lazyLoad: true,
    nav: true,
    navText: [`<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_86_8)">
    <circle cx="20" cy="25" r="15" fill="white"/>
    <circle cx="20" cy="25" r="14.5" stroke="#FF9933" stroke-opacity="0.29"/>
    </g>
    <path d="M12.3093 26.0607C11.7236 25.4749 11.7236 24.5251 12.3093 23.9393L21.8553 14.3934C22.4411 13.8076 23.3908 13.8076 23.9766 14.3934C24.5624 14.9792 24.5624 15.9289 23.9766 16.5147L15.4913 25L23.9766 33.4853C24.5624 34.0711 24.5624 35.0208 23.9766 35.6066C23.3908 36.1924 22.4411 36.1924 21.8553 35.6066L12.3093 26.0607ZM14.37 26.5H13.37V23.5H14.37V26.5Z" fill="#F68E34"/>
    <defs>
    <filter id="filter0_d_86_8" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="5"/>
    <feGaussianBlur stdDeviation="5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_86_8"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_86_8" result="shape"/>
    </filter>
    </defs>
    </svg>
    
    `, `<svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g filter="url(#filter0_d_87_2)">
    <circle cx="20" cy="25" r="15" transform="rotate(-180 20 25)" fill="white"/>
    <circle cx="20" cy="25" r="14.5" transform="rotate(-180 20 25)" stroke="#FF9933" stroke-opacity="0.29"/>
    </g>
    <path d="M27.6907 23.9393C28.2764 24.5251 28.2764 25.4749 27.6907 26.0607L18.1447 35.6066C17.5589 36.1924 16.6092 36.1924 16.0234 35.6066C15.4376 35.0208 15.4376 34.0711 16.0234 33.4853L24.5087 25L16.0234 16.5147C15.4376 15.9289 15.4376 14.9792 16.0234 14.3934C16.6092 13.8076 17.5589 13.8076 18.1447 14.3934L27.6907 23.9393ZM25.63 23.5H26.63V26.5H25.63V23.5Z" fill="#F68E34"/>
    <defs>
    <filter id="filter0_d_87_2" x="0" y="0" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
    <feOffset dx="5"/>
    <feGaussianBlur stdDeviation="5"/>
    <feComposite in2="hardAlpha" operator="out"/>
    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_87_2"/>
    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_87_2" result="shape"/>
    </filter>
    </defs>
    </svg>
        
    `],
    responsive: {
        0: {
            items: 1
        },
        420: {
            items: 1.5
        },
        1024: {
            items: 2
        }
    }
});


// Function to add indus value in dict
async function indus(x) {
    indus_value = x;
    industries = x;
    $('.indus').hide();
    dogzy_user(indus_value);
    console.log(industries);
    scroll_down()

}


// Fuction that create single line message
async function dogzy_text_a(text, class_name) {
    tag_div = document.createElement("div");
    tag = document.createElement("a");
    tag_div.classList.add("dogzy-text-div", class_name);
    tag.className = "dogzy-text";
    tag.innerHTML = text;
    tag_div.appendChild(tag);
    element.appendChild(tag_div);
    scroll_down()
}


// function to create multiline message
async function dogzy_text_p(text, class_name) {
    tag_div = document.createElement("div");
    tag = document.createElement("p");
    tag_div.classList.add("dogzy-text-div", class_name);
    tag.className = "dogzy-text";
    tag.innerHTML = text;
    tag_div.appendChild(tag);
    element.appendChild(tag_div);
    scroll_down()

}


// Function to create img tag in chat
async function dogzy_img(url, class_name) {
    gif_div = document.createElement("div");
    gif = document.createElement("img");
    gif_div.classList.add("dogzy-gif-div", class_name);
    gif.className = "dogzy-gif";
    gif.src = url;
    gif_div.appendChild(gif);
    element.appendChild(gif_div);
    scroll_down()

}


// Function to create Single user side message 
async function dogzy_user(text, class_name) {
    user_div = document.createElement("div");
    user = document.createElement("a");
    user_div.classList.add("dogzy-user-div", class_name);
    user.className = "dogzy-user";
    user.innerHTML = `${text}`;
    user_div.appendChild(user);
    element.appendChild(user_div);
    scroll_down()

}


// Function to create multiline user side message 
async function dogzy_user_p(text, class_name) {
    user_div = document.createElement("div");
    user = document.createElement("p");
    user_div.className = "dogzy-user-div", class_name;
    user.className = "dogzy-user";
    user.innerHTML = `${text}`;
    user_div.appendChild(user);
    element.appendChild(user_div);
    scroll_down()

}


// Fuction to create selective options for user Single line
async function dogzy_user_option(text, text_class) {
    option_div = document.createElement("div");
    option = document.createElement("a");
    option_div.className = "dogzy-user-option-div";
    option.className = "dogzy-user";
    option.classList.add("dogzy-user-option", `${text_class}`);
    option.id = text_class;
    option.href = `#${text_class}`;
    option.innerHTML = `${text}`;
    option_div.appendChild(option);
    element.appendChild(option_div);
    scroll_down()

}

// Fuction to create selective options for user multiline
async function dogzy_user_option_p(text, text_class) {
    option_div = document.createElement("div");
    option = document.createElement("p");
    option_div.className = "dogzy-user-option-div";
    option.className = "dogzy-user";
    option.classList.add("dogzy-user-option", "dogzy-user-option-p", `${text_class}`);
    option.id = text_class;
    option.href = `#${text_class}`;
    option.innerHTML = `${text}`;
    option_div.appendChild(option);
    element.appendChild(option_div);
    scroll_down()

}

// Function to create Message box
async function message_feild(title, placeholder, submit_class, pr) {
    message_div = document.createElement("div");
    message_title = document.createElement("h4");
    message_input = document.createElement("textarea");
    message_input.placeholder = placeholder;
    message_submit = document.createElement("input");
    message_submit.setAttribute("type", "submit");
    message_div.classList.add("message_div");
    message_title.classList.add("message_title");
    message_input.classList.add("message_textarea");
    message_submit.classList.add("message_submit", submit_class);
    message_title.innerHTML = `${title}`;
    message_div.appendChild(message_title);
    message_div.appendChild(message_input);
    message_div.appendChild(message_submit);
    element.appendChild(message_div);
    setInterval(async function () {
        user_query = `${message_input.value}`;
    }, 1);
    progress_reach = pr;
    scroll_down()

}

// Function for mobile number capturing
async function mobile_feild(title, placeholder, submit_class, pr) {
    mobile_div = document.createElement("div");
    mobile_div_inner = document.createElement("div");
    mobile_title = document.createElement("h4");
    mobile_input = document.createElement("input");
    mobile_input.placeholder = placeholder;
    mobile_submit = document.createElement("button");
    mobile_submit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
    </svg>`;
    mobile_input.setAttribute('min', 8);
    mobile_input.setAttribute('max', 12);
    mobile_submit.href = '#';
    mobile_div.classList.add("mobile_div");
    mobile_div_inner.classList.add("mobile_div_inner");
    mobile_title.classList.add("mobile_title");
    mobile_input.classList.add("mobile_input");
    mobile_input.setAttribute("type", "number");
    mobile_submit.classList.add("mobile_submit", submit_class);
    mobile_title.innerHTML = `${title}`;
    mobile_div.appendChild(mobile_title);
    mobile_div_inner.appendChild(mobile_input);
    mobile_div_inner.appendChild(mobile_submit);
    mobile_div.appendChild(mobile_div_inner);
    element.appendChild(mobile_div);
    setInterval(async function () {
        phone = mobile_input.value;
    }, 1);
    progress_reach = pr;
    scroll_down()

}

// Function to create Email feild
async function email_feild(title, placeholder, submit_class, pr) {
    email_div = document.createElement("div");
    email_div_inner = document.createElement("div");
    email_title = document.createElement("h4");
    email_input = document.createElement("input");
    email_input.placeholder = placeholder;
    email_submit = document.createElement("button");
    email_submit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
    <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z"/>
    </svg>`;
    email_submit.href = '#';
    email_div.classList.add("email_div");
    email_div_inner.classList.add("email_div_inner");
    email_title.classList.add("email_title");
    email_input.classList.add("email_input");
    email_input.type = "email";
    email_submit.classList.add("email_submit", submit_class);
    email_title.innerHTML = `${title}`;
    email_div.appendChild(email_title);
    email_div_inner.appendChild(email_input);
    email_div_inner.appendChild(email_submit);
    email_div.appendChild(email_div_inner);
    element.appendChild(email_div);
    setInterval(function () {

        email = `${email_input.value}`;
    })
    progress_reach = pr
    scroll_down()

}
// Common Idus Ending
async function indus_second_Step(Solution_type) {
    solution_type = Solution_type;
    // Joi
    dogzy_img('items/joe-compressed.webp');
    await sleep()
    email_feild('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?', 'Type your email here...', 'email_submit', 2.11111);
    await sleep()
    setInterval(async function () {

        switch (progress_reach) {
            case 2.11111:
                stop_loop(2.11111);
                $('.email_submit').click(indus_email)
                email_input.addEventListener("keyup", async function (event) {
                    if (event.keyCode === 13) {
                        indus_email()
                        return false;
                    }
                });

                async function indus_email() {
                    if (email != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,14})+$/.test(email)) {
                        $('.email_div').hide();
                        if (progress_reach != 2.111119) {
                            dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?');
                            await sleep()
                            dogzy_user(email);
                        }
                        progress_reach = 2.111119
                        dogzy_text_p('Great! We are almost done.');
                        await sleep()
                        dogzy_text_p('To connect you with the best representative, Can you share a <strong>phone number</strong> to reach at?');
                        await sleep()
                        dogzy_user_option('Phone Number', 'PhoneNumber');
                        resp('Phone Number', 'PhoneNumber', 2.111111);
                        dogzy_user_option('Skip', 'Skip');
                        resp('Skip', 'Skip', 2.111112);
                    } else {
                        if (!$('.invalid_email').is(':visible')) {
                            email_error = document.createElement("h6");
                            email_error.innerHTML = 'Invalid Email';
                            email_error.classList.add("invalid_email");
                            email_div.appendChild(email_error);
                            await sleep()
                        }
                    }
                }
                scroll_down()
                break;
        }

        switch (progress_reach) {
            case 2.111111:
                stop_loop(2.111111)
                $('.Skip').hide()
                phone = undefined;
                mobile_feild('Phone Number', 'Type your phone here...', 'phone_skip', 2.1111111);
                await sleep()
                setInterval(async function () {
                    switch (progress_reach) {
                        case 2.1111111:
                            console.log('Indus OUTSIDE the IF structure')
                            // if (phone.length ) {
                            console.log('inside if of Phone in 2.1111111');
                            stop_loop(2.1111111);
                            $('.phone_skip').click(indus_phone)
                            mobile_input.addEventListener("keyup", async function (event) {
                                if (event.keyCode === 13) {

                                    indus_phone()
                                    await sleep()
                                    return false;
                                }
                            });
                            // }

                            async function indus_phone() {
                                if (phone.length < 12 && phone.length > 8) {
                                    stop_loop(2.1111111);
                                    $('.mobile_div').hide();
                                    await sleep()
                                    dogzy_text_a('Phone Number');
                                    await sleep()
                                    dogzy_user(phone);
                                    console.log('Indus OUTSIDE the IF structure')
                                    console.log(phone);
                                    after_ex()
                                } else {
                                    if (!$('.invalid_mobile').is(':visible')) {
                                        await sleep()
                                        mobile_error = document.createElement("h6");
                                        mobile_error.innerHTML = 'Invalid Phone Number';
                                        mobile_error.classList.add("invalid_mobile");
                                        mobile_div.appendChild(mobile_error);
                                        await sleep()
                                    }
                                }

                            }
                            scroll_down()
                            break;
                    }
                })
                break;
            case 2.111112:
                $('.PhoneNumber').hide()
                stop_loop(2.111112)
                after_ex()
                await sleep()
                scroll_down()
                break;
        }

    }, 1);
}

// Last Ending 
async function after_ex() {
    // claping dogs
    await sleep()
    dogzy_img('items/claping-dogs-compressed.webp');
    await sleep()
    dogzy_text_p(`I have shared your requirements with one of our product experts. Who will reach out to you via email or call in <strong>24 hours.</strong>`);
    await sleep()
    dogzy_text_p(`Nice talking to you. Have a good day!
<strong>byeeee.</strong>`);
    await sleep()
    dogzy_img('items/by-dog-compressed.webp');

}

// Display Back Button
async function back_display() {
    dogzy_user('Back')
    scroll_down()
}

// Hide Option after back
async function common_back_cmd() {
    $('.dogzy-user-option-div').hide()
    $('.indus').hide()
    $('.message_div').hide()
    $('.mobile_div').hide()
    $('.email_div').hide()
    scroll_down()
}

// Back BTN Function Start
async function back_btn() {
    console.log(progress_reach + " Start")
    if (progress_reach == -1) {
        if (extra == 'frist') {
            console.log('Start')
        } else if (extra == 'back') {
            back_display()
            progress_reach = 0
            common_back_cmd()
            console.log('Back to Hi')
        }
    } else if (progress_reach == -2.1) {
        dogzy_text_a('I have a Query')
        common_back_cmd()
        back_display()
        progress_reach = 1
        console.log('Back from {I Have Query} and {About jassi}')
    } else if (progress_reach == -3.1) {
        common_back_cmd()
        back_display()
        progress_reach = 1
        console.log('Back from {I Have Query} and {About jassi}')
    } else if (progress_reach == -2.12) {
        back_display()
        progress_reach = 2.1
        common_back_cmd()
        console.log('Back from {Choose}{Write}{Call}')
    } else if (progress_reach == -2.11) {
        common_back_cmd()
        dogzy_text_a('Select your Query Type')
        back_display()
        progress_reach = 2.1
        console.log('Back from {Indus}')
    } else if (progress_reach == 2.111) {
        common_back_cmd()
        dogzy_text_a('Select your Query Type')
        back_display()
        progress_reach = 2.1
        console.log('Back from {Indus}')
    } else if (progress_reach == -2.111) {
        dogzy_text_a('Select solution type')
        common_back_cmd()
        back_display()
        progress_reach = 2.11
        console.log('Back from {4 in 1}{Other}')
    } else if (progress_reach == 2.11111) {
        dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?')
        back_display()
        common_back_cmd()
        progress_reach = 2.111
        console.log('Back from {Email of Solution Type} {Other Query}')
    } else if (progress_reach == -2.11111) {
        dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?')
        back_display()
        common_back_cmd()
        progress_reach = 2.111
        console.log('Back from {Email of Solution Type} {Other Query}')
    } else if (progress_reach == 2.111511) {
        dogzy_text_a('Write your Query')
        common_back_cmd()
        back_display()
        progress_reach = 2.111
        console.log('Back from {Other} {Write your Query}')
    } else if (progress_reach == -2.111511) {
        dogzy_text_a('Write your Query')
        common_back_cmd()
        back_display()
        progress_reach = 2.111
        console.log('Back from {Other} {Write your Query}')
    } else if (progress_reach == 2.1115111) {
        dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?')
        back_display()
        common_back_cmd()
        progress_reach = 2.1115
        console.log('Back from {Other} {Email}')
    } else if (progress_reach == -2.1115111) {
        common_back_cmd()
        back_display()
        // progress_reach = 2.111
        indus_second_Step(solution_type)
        // $('.write_your_query').click()
        console.log('Back from {Write your Query}')
    } else if (progress_reach == -2.111511111) {
        back_display()
        progress_reach = 2.1115111
        $('.other_email_submit').click()
    } else if (progress_reach == -2.11151112) {
        back_display()
        progress_reach = -2.11151119
        $('.other_email_submit').click()
    } else if (progress_reach == 2.11151119) {
        common_back_cmd()
        back_display()
        progress_reach = 2.1115111
    } else if (progress_reach == -2.11151119) {
        common_back_cmd()
        back_display()
        indus_second_Step(solution_type)
    } else if (progress_reach == 2.111119) {
        common_back_cmd()
        back_display()
        indus_second_Step(solution_type)
    } else if (progress_reach == 2.1111111) {
        common_back_cmd()
        back_display()
        progress_reach = 2.111119
        $('.email_submit').click()
    } else if (progress_reach == -2.1111111) {
        common_back_cmd()
        back_display()
        progress_reach = 2.111119
        $('.email_submit').click()
    } else if (progress_reach == -2.111112) {
        common_back_cmd()
        back_display()
        progress_reach = 2.111119
        $('.email_submit').click()
    } else if (progress_reach == 2.121) {
        dogzy_text_a('Write your Query')
        common_back_cmd()
        back_display()
        progress_reach = 2.1
    } else if (progress_reach == -2.121) {
        dogzy_text_a('Write your Query')
        common_back_cmd()
        back_display()
        progress_reach = 2.1
    } else if (progress_reach == 2.1211) { //|| progress_reach == -2.1211) {
        back_display()
        common_back_cmd()
        $('.write_your_query').click()

    } else if (progress_reach == -2.1211) {
        back_display()
        common_back_cmd()
        progress_reach = 2.12
        // $('.write_your_query').click()

    } else if (progress_reach == 2.12119) {
        common_back_cmd()
        back_display()
        progress_reach = 2.121191
        $('.write_your_query').click()
    } else if (progress_reach == 2.121111) { // || progress_reach == -2.12112 || progress_reach == -2.121111) {
        common_back_cmd()
        back_display()
        $('.email_submit').click()
    } else if (progress_reach == -2.12112) {
        common_back_cmd()
        back_display()
        progress_reach = 2.12118
        $('.email_submit').click()
    } else if (progress_reach == -2.121111) {
        common_back_cmd()
        back_display()
        progress_reach = 2.12118
        $('.email_submit').click()
    } else if (progress_reach == -2.13) {
        common_back_cmd()
        back_display()
        progress_reach = 2.1
    } else if (progress_reach == 2.1311) {
        common_back_cmd()
        back_display()
        progress_reach = 2.13
    } else if (progress_reach == -2.1311) {
        common_back_cmd()
        back_display()
        progress_reach = 2.13
    }
    console.log(progress_reach + " End")

}
// Back BTN async function End

setInterval(async function () {

    switch (progress_reach) {
        case 0:
            extra = 'frist';
            stop_loop(1);
            dogzy_text_a('Hi, There!');
            await sleep()
            dogzy_text_a('I am <strong> Mr. Dogzy! </strong>');
            await sleep()
            // Hi dog
            dogzy_img('items/hi-dog-compressed.webp');
            await sleep()
            dogzy_user_option('Hi', 'Hi');
            scroll_down()
            resp('Hi', 'Hi', 1);
            scroll_down()
            break;
    }

    switch (progress_reach) {
        case 1:
            extra = 'back';
            dogzy_text_a('How can I <strongs>help</strong> you?');
            stop_loop(1);
            dogzy_user_option('I have a Query', 'ihaveaquery');
            resp('I have a Query', 'ihaveaquery', 2);
            dogzy_user_option('About <strong>jassi</strong>', 'Aboutjassi');
            resp('About <strong>jassi</strong>', 'Aboutjassi', 3);
            scroll_down()
            console.log(progress_reach)
            setInterval(async function () {
                switch (progress_reach) {
                    case 2:
                        $('.Aboutjassi').hide()
                        console.log(progress_reach)
                        progress_reach = 2.1
                        setInterval(async function () {
                            switch (progress_reach) {
                                case 2.1:
                                    stop_loop(2.1);
                                    await sleep()
                                    dogzy_user_option('Choose your Industry', 'ChooseyourIndustry');
                                    resp('Choose your Industry', 'ChooseyourIndustry', 2.11);
                                    dogzy_user_option('Write your Query', 'WriteyourQuery');
                                    resp('Write your Query', 'WriteyourQuery', 2.12);
                                    dogzy_user_option('Call with jassi product Expert', 'CallwithjassiproductExpert');
                                    resp('Call with jassi product Expert', 'CallwithjassiproductExpert', 2.13);
                                    scroll_down()
                                    setInterval(async function () {
                                        switch (progress_reach) {
                                            case 2.11:
                                                stop_loop(2.11);
                                                common_back_cmd()
                                                // dogzy_text_a('Choose your Industries');
                                                indus_section = document.querySelector('.indus');
                                                element.appendChild(indus_section);
                                                $('.indus').show();
                                                scroll_down()
                                                progress_reach = 2.111
                                                setInterval(async function () {
                                                    if (indus_section.style.display == "none") {
                                                        switch (progress_reach) {
                                                            case 2.111:
                                                                stop_loop(2.111);
                                                                dogzy_user_option('AI-Based Security & Monitoring', 'AIBasedSecurityMonitoring');
                                                                resp('AI-Based Security & Monitoring', 'AIBasedSecurityMonitoring', 2.1111);
                                                                dogzy_user_option('Acess Control & Perimeter Guarding', 'AcessControlPerimeterGuarding');
                                                                resp('Acess Control & Perimeter Guarding', 'AcessControlPerimeterGuarding', 2.1112);
                                                                dogzy_user_option('Pilferage Control', 'PilferageControl');
                                                                resp('Pilferage Control', 'PilferageControl', 2.1113);
                                                                dogzy_user_option('People Management', 'PeopleManagement');
                                                                resp('People Management', 'PeopleManagement', 2.1114);
                                                                dogzy_user_option('Other', 'Other');
                                                                resp('Other', 'Other', 2.1115);
                                                                scroll_down()
                                                                setInterval(async function () {
                                                                    switch (progress_reach) {
                                                                        case 2.1111:
                                                                            stop_loop(2.1111);
                                                                            common_back_cmd()
                                                                            console.log('AI-Based Security & Monitoring')
                                                                            indus_second_Step('AI-Based Security & Monitoring')
                                                                            scroll_down()
                                                                            break;

                                                                        case 2.1112:
                                                                            common_back_cmd()
                                                                            stop_loop(2.1112);
                                                                            console.log('Acess Control & Perimeter Guarding')
                                                                            indus_second_Step('Acess Control & Perimeter Guarding')
                                                                            scroll_down()
                                                                            break;
                                                                        case 2.1113:
                                                                            common_back_cmd()
                                                                            stop_loop(2.1113);
                                                                            console.log('Pilferage Control')
                                                                            indus_second_Step('Pilferage Control')
                                                                            scroll_down()
                                                                            break;
                                                                        case 2.1114:
                                                                            common_back_cmd()
                                                                            stop_loop(2.1114);
                                                                            console.log('People Management')
                                                                            indus_second_Step('People Management')
                                                                            scroll_down()
                                                                            break;
                                                                        case 2.1115:
                                                                            common_back_cmd()
                                                                            stop_loop(2.1115);
                                                                            progress_reach = 2.11151
                                                                            console.log('Other')
                                                                            scroll_down()
                                                                            switch (progress_reach) {
                                                                                case 2.11151:
                                                                                    stop_loop(2.11151);
                                                                                    await sleep()
                                                                                    message_feild('Enter your Query', 'Write your query here....', 'other_write_your_query', 2.111511);
                                                                                    scroll_down()
                                                                                    setInterval(async function () {
                                                                                        switch (progress_reach) {
                                                                                            case 2.111511:
                                                                                                if (user_query != "") {
                                                                                                    console.log('inside if of User_Query')
                                                                                                    stop_loop(2.111511);
                                                                                                    $('.other_write_your_query').click(async function () {
                                                                                                        $('.message_div').hide();
                                                                                                        if (progress_reach == -2.111511) {
                                                                                                            await sleep()
                                                                                                            dogzy_user_p(user_query);
                                                                                                            console.log('Click Submit in User Query')
                                                                                                            console.log(user_query);
                                                                                                        }
                                                                                                        // Roger that
                                                                                                        await sleep()
                                                                                                        dogzy_img('items/roger-that-compressed.webp');
                                                                                                        await sleep()
                                                                                                        email_feild('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?', 'Type your email here...', 'other_email_submit', 2.1115111);
                                                                                                        await sleep()
                                                                                                        scroll_down()
                                                                                                        setInterval(async function () {
                                                                                                            switch (progress_reach) {
                                                                                                                case 2.1115111:
                                                                                                                    stop_loop(2.1115111);
                                                                                                                    $('.other_email_submit').click(other_email)

                                                                                                                    email_input.addEventListener("keyup", async function (event) {
                                                                                                                        if (event.keyCode === 13) {
                                                                                                                            other_email()
                                                                                                                            return false;
                                                                                                                        }
                                                                                                                    });

                                                                                                                    async function other_email() {
                                                                                                                        if (email != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {

                                                                                                                            $('.email_div').hide();
                                                                                                                            if (progress_reach == -2.1115111) {
                                                                                                                                await sleep()
                                                                                                                                dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?');
                                                                                                                                await sleep()
                                                                                                                                dogzy_user(email);
                                                                                                                                console.log(email)
                                                                                                                            }
                                                                                                                            await sleep()
                                                                                                                            dogzy_text_p('Great! We are almost done.');
                                                                                                                            await sleep()
                                                                                                                            dogzy_text_p('To connect you with the best representative, Can you share a <strong>phone number</strong> to reach at?');
                                                                                                                            await sleep()
                                                                                                                            dogzy_user_option('Phone Number', 'PhoneNumber');
                                                                                                                            resp('Phone Number', 'PhoneNumber', 2.11151111);

                                                                                                                            dogzy_user_option('Skip', 'Skip');
                                                                                                                            resp('Skip', 'Skip', 2.11151112);

                                                                                                                            scroll_down()
                                                                                                                            setInterval(async function () {
                                                                                                                                switch (progress_reach) {
                                                                                                                                    case 2.11151111:
                                                                                                                                        stop_loop(2.11151111)
                                                                                                                                        $('.Skip').hide()
                                                                                                                                        phone = undefined;
                                                                                                                                        await sleep()
                                                                                                                                        mobile_feild('Phone Number', 'Type your phone here...', 'other_phone_skip', 2.111511111);
                                                                                                                                        await sleep()
                                                                                                                                        scroll_down()
                                                                                                                                        setInterval(async function () {
                                                                                                                                            switch (progress_reach) {
                                                                                                                                                case 2.111511111:
                                                                                                                                                    stop_loop(2.111511111);
                                                                                                                                                    $('.other_phone_skip').click(other_phone)
                                                                                                                                                    mobile_input.addEventListener("keyup", async function (event) {
                                                                                                                                                        if (event.keyCode === 13) {
                                                                                                                                                            other_phone()
                                                                                                                                                            return false;
                                                                                                                                                        }
                                                                                                                                                    });

                                                                                                                                                    async function other_phone() {
                                                                                                                                                        if (phone.length < 12 && phone.length > 8) {
                                                                                                                                                            stop_loop(2.111511111);
                                                                                                                                                            $('.mobile_div').hide();
                                                                                                                                                            await sleep()
                                                                                                                                                            dogzy_text_a('Phone Number');
                                                                                                                                                            await sleep()
                                                                                                                                                            dogzy_user(phone);
                                                                                                                                                            console.log('Click Submit in Phone 2.121111')
                                                                                                                                                            console.log(phone);
                                                                                                                                                            phone = undefined;
                                                                                                                                                            after_ex()
                                                                                                                                                            scroll_down()
                                                                                                                                                        } else {
                                                                                                                                                            if (!$('.invalid_mobile').is(':visible')) {
                                                                                                                                                                mobile_error = document.createElement("h6");
                                                                                                                                                                mobile_error.innerHTML = 'Invalid Phone Number';
                                                                                                                                                                mobile_error.classList.add("invalid_mobile");
                                                                                                                                                                mobile_div.appendChild(mobile_error);
                                                                                                                                                            }
                                                                                                                                                        }
                                                                                                                                                    }
                                                                                                                                                    scroll_down()
                                                                                                                                                    break;
                                                                                                                                            }
                                                                                                                                        })
                                                                                                                                        scroll_down()
                                                                                                                                        break;
                                                                                                                                    case 2.11151112:
                                                                                                                                        $('.PhoneNumber').hide()
                                                                                                                                        stop_loop(2.11151112)
                                                                                                                                        after_ex()
                                                                                                                                        scroll_down()
                                                                                                                                        break;
                                                                                                                                }
                                                                                                                            })
                                                                                                                        } else {
                                                                                                                            if (!$('.invalid_email').is(':visible')) {
                                                                                                                                email_error = document.createElement("h6");
                                                                                                                                email_error.innerHTML = 'Invalid Email';
                                                                                                                                email_error.classList.add("invalid_email");
                                                                                                                                email_div.appendChild(email_error);
                                                                                                                            }
                                                                                                                        }
                                                                                                                    }
                                                                                                                    scroll_down()
                                                                                                                    break;
                                                                                                            }


                                                                                                        }, 1);
                                                                                                    })
                                                                                                }
                                                                                                scroll_down()
                                                                                                break;
                                                                                        }

                                                                                    }, 1);
                                                                                    scroll_down()
                                                                                    break;
                                                                            }

                                                                    }
                                                                }, 1)
                                                                scroll_down()
                                                                break;
                                                        }
                                                    }
                                                }, 1);
                                                scroll_down()
                                                break;
                                            case 2.12:
                                                stop_loop(2.12);
                                                $('.ChooseyourIndustry').hide();
                                                $('.CallwithjassiproductExpert').hide();
                                                await sleep()
                                                message_feild('Enter your Query', 'Write your query', 'write_your_query', 2.121);
                                                await sleep()
                                                scroll_down()
                                                setInterval(async function () {
                                                    switch (progress_reach) {
                                                        case 2.121:
                                                            if (user_query != "") {
                                                                console.log('inside if of User_Query')
                                                                stop_loop(2.121);
                                                                $('.write_your_query').click(async function () {
                                                                    $('.message_div').hide();
                                                                    if (progress_reach == -2.121) {
                                                                        await sleep()
                                                                        dogzy_user_p(user_query);
                                                                        console.log('Click Submit in User Query')
                                                                        console.log(user_query);
                                                                    }

                                                                    // roger that
                                                                    await sleep()
                                                                    dogzy_img('items/roger-that-compressed.webp');
                                                                    await sleep()
                                                                    email_feild('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?', 'Type your email here...', 'email_submit', 2.1211);
                                                                    scroll_down()
                                                                    setInterval(async function () {
                                                                        switch (progress_reach) {
                                                                            case 2.1211:
                                                                                stop_loop(2.1211);
                                                                                $('.email_submit').click(write_your_query_email)
                                                                                email_input.addEventListener("keyup", async function (event) {
                                                                                    if (event.keyCode === 13) {
                                                                                        write_your_query_email()
                                                                                        return false;
                                                                                    }
                                                                                });

                                                                                async function write_your_query_email() {
                                                                                    if (email != '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                                                                                        $('.email_div').hide();
                                                                                        if (progress_reach == -2.1211) {
                                                                                            await sleep()
                                                                                            dogzy_text_p('Just in case we miss out on connecting, may I have your <strong>Email ID</strong>?');
                                                                                            await sleep()
                                                                                            dogzy_user(email);
                                                                                        }
                                                                                        await sleep()
                                                                                        dogzy_text_p('Great! We are almost done.');
                                                                                        await sleep()
                                                                                        dogzy_text_p('To connect you with the best representative, Can you share a <strong>phone number</strong> to reach at?');
                                                                                        progress_reach = 2.12119
                                                                                        await sleep()
                                                                                        dogzy_user_option('Phone Number', 'PhoneNumber');
                                                                                        resp('Phone Number', 'PhoneNumber', 2.12111);
                                                                                        dogzy_user_option('Skip', 'Skip');
                                                                                        resp('Skip', 'Skip', 2.12112);
                                                                                        scroll_down()
                                                                                        setInterval(async function () {
                                                                                            switch (progress_reach) {
                                                                                                case 2.12111:
                                                                                                    stop_loop(2.12111)
                                                                                                    $('.Skip').hide()
                                                                                                    phone = undefined;
                                                                                                    await sleep()
                                                                                                    mobile_feild('Phone Number', 'Type your phone here...', 'phone_skip', 2.121111);
                                                                                                    await sleep()
                                                                                                    scroll_down()
                                                                                                    setInterval(async function () {
                                                                                                        switch (progress_reach) {
                                                                                                            case 2.121111:
                                                                                                                console.log('Write your Query OUTSIDE the IF structure')
                                                                                                                // if (phone > 10000000 && phone < 99999999999999) {
                                                                                                                console.log('inside if of Phone in 2.121111');
                                                                                                                stop_loop(2.121111);
                                                                                                                stop_loop(2.121111);
                                                                                                                $('.phone_skip').click(write_your_query_phone)
                                                                                                                mobile_input.addEventListener("keyup", async function (event) {
                                                                                                                    if (event.keyCode === 13) {
                                                                                                                        write_your_query_phone()
                                                                                                                        return false;
                                                                                                                    }
                                                                                                                });

                                                                                                                async function write_your_query_phone() {
                                                                                                                    if (phone.length < 12 && phone.length > 8) {
                                                                                                                        $('.mobile_div').hide();
                                                                                                                        await sleep()
                                                                                                                        dogzy_text_a('Phone Number');
                                                                                                                        await sleep()
                                                                                                                        dogzy_user(phone);
                                                                                                                        console.log('Write your Query INSIDE the IF structure')
                                                                                                                        console.log(phone);
                                                                                                                        phone = undefined;
                                                                                                                        after_ex()
                                                                                                                        scroll_down()
                                                                                                                    } else {
                                                                                                                        if (!$('.invalid_mobile').is(':visible')) {
                                                                                                                            mobile_error = document.createElement("h6");
                                                                                                                            mobile_error.innerHTML = 'Invalid Phone Number';
                                                                                                                            mobile_error.classList.add("invalid_mobile");
                                                                                                                            mobile_div.appendChild(mobile_error);
                                                                                                                        }
                                                                                                                    }
                                                                                                                }
                                                                                                                // }
                                                                                                                scroll_down()
                                                                                                                break;
                                                                                                        }
                                                                                                    })
                                                                                                    scroll_down()
                                                                                                    break;
                                                                                                case 2.12112:
                                                                                                    await sleep()
                                                                                                    $('.PhoneNumber').hide()
                                                                                                    stop_loop(2.12112)
                                                                                                    after_ex()
                                                                                                    scroll_down()
                                                                                                    break;
                                                                                            }
                                                                                        })
                                                                                    } else {
                                                                                        if (!$('.invalid_email').is(':visible')) {
                                                                                            email_error = document.createElement("h6");
                                                                                            email_error.innerHTML = 'Invalid Email';
                                                                                            email_error.classList.add("invalid_email");
                                                                                            email_div.appendChild(email_error);
                                                                                        }
                                                                                    }
                                                                                }

                                                                                scroll_down()

                                                                                break;
                                                                        }

                                                                    }, 1);
                                                                })
                                                            }
                                                            scroll_down()
                                                            break;
                                                    }

                                                }, 1);
                                                scroll_down()
                                                break;
                                            case 2.13:
                                                stop_loop(2.13);
                                                await sleep()
                                                $('.WriteyourQuery').hide();
                                                $('.ChooseyourIndustry').hide();
                                                dogzy_text_p('To connect you with the best representative, Can you share a <strong>phone number</strong> to reach at?');
                                                await sleep()
                                                dogzy_user_option('Phone Number', 'PhoneNumber');
                                                resp('Phone Number', 'PhoneNumber', 2.131);
                                                scroll_down()
                                                setInterval(async function () {
                                                    switch (progress_reach) {
                                                        case 2.131:
                                                            // dogzy_text_a('Phone Number');
                                                            phone = undefined;
                                                            mobile_feild('Phone Number', 'Type your phone here...', 'call_jassi_expert', 2.1311);
                                                            scroll_down()
                                                            setInterval(async function () {
                                                                switch (progress_reach) {
                                                                    case 2.1311:
                                                                        console.log('Call jassi PE OUTSIDE the IF structure')
                                                                        console.log('inside if of Phone')
                                                                        stop_loop(2.1311);
                                                                        $('.call_jassi_expert').click(call_jassi_expert_phone)
                                                                        mobile_input.addEventListener("keyup", async function (event) {
                                                                            if (event.keyCode === 13) {
                                                                                call_jassi_expert_phone()
                                                                                return false;
                                                                            }
                                                                        });

                                                                        async function call_jassi_expert_phone() {
                                                                            if (phone.length < 12 && phone.length > 8) {
                                                                                $('.mobile_div').hide();
                                                                                await sleep()
                                                                                dogzy_user(phone);
                                                                                console.log('Call jassi PE INSIDE the IF structure')
                                                                                console.log(phone);
                                                                                phone = undefined;
                                                                                after_ex()
                                                                                scroll_down()
                                                                            } else {
                                                                                if (!$('.invalid_mobile').is(':visible')) {
                                                                                    mobile_error = document.createElement("h6");
                                                                                    mobile_error.innerHTML = 'Invalid Phone Number';
                                                                                    mobile_error.classList.add("invalid_mobile");
                                                                                    mobile_div.appendChild(mobile_error);
                                                                                }
                                                                            }
                                                                        }
                                                                        scroll_down()
                                                                        break;
                                                                }
                                                            }, 1);
                                                            scroll_down()
                                                            break;
                                                    }
                                                })
                                                scroll_down()
                                                break;
                                        }
                                    })
                                    scroll_down()
                                    break;
                            }
                        }, 1);
                        scroll_down()
                        break;
                    case 3:
                        $('.ihaveaquery').hide()
                        console.log(progress_reach)
                        progress_reach = 3.1
                        setInterval(async function () {
                            switch (progress_reach) {
                                case 3.1:
                                    stop_loop(3.1);
                                    await sleep()
                                    dogzy_text_p('We, at jassi, deliver e surveillance & cloud security solutions that make your business premises intelligent, safe & secure using state of art unified IoT platform.')
                                    await sleep()
                                    dogzy_user_option('I am Intersted', 'IamIntersted');
                                    resp('I am Intersted', 'IamIntersted', 2);
                                    console.log(progress_reach)
                                    scroll_down()
                                    break;
                            }
                        })
                        break;
                }
            }, 1);
            break;
    }
}, 1);