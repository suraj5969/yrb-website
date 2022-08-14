
var is_mobile = !!navigator.userAgent.match(/iphone|android/ig) || false;
// console.log(is_mobile);
if (!is_mobile) {
    const replace = '<section id="inspiration" class="inspiration">\
        <div class="container">\
            <header class="section-header"><h2>Our Inspirations</h2></header>\
    <div class="row" >\
        <div class="col-lg-3 mt-4 col-md-6">\
            <a href="https://en.wikipedia.org/wiki/Shivaji" target="_blank">\
                <div class="box">\
                    <img src="assets/img/inspiration/csm.png" class="img-fluid" alt="">\
                    <h3 class="card-title">Chhatrapati Shivaji Maharaj</h3>\
                    <p class="card-text">"अगर मनुष्य के पास आत्मबल है, तो वो समस्त संसार पर अपने हौसले से विजय पताका लहरा सकता है।"</p>\
            </div>\
        </a>\
        </div>\
            <div class="col-lg-3 mt-4 col-md-6">\
                <a href="https://en.wikipedia.org/wiki/Sambhaji" target="_blank">\
                    <div class="box">\
                        <img src="assets/img/inspiration/sm.png" class="img-fluid" alt="">\
                        <h3 class="card-title">Chhatrapati Sambhaji Maharaj</h3>\
                        <p class="card-text">लपती लाल सलिया सह ली, पर आंखें ना वह झुकी थी ।जबान काट दी औरंग ने,फिर भी रहम ना मांगी थी । चल गया था बदन सारा , फिरभी सर नहीं झुका था। धरम पर मिट गया वो, शेर शिवा का छावा था ।</p> \
            </div>\
        </a>\
        </div>\
                <div class="col-lg-3 mt-4 col-md-6">\
                    <a href="https://en.wikipedia.org/wiki/Jyotirao_Phule" target="_blank">\
                        <div class="box">\
                            <img src="assets/img/inspiration/mjf.jpg" class="img-fluid" alt="">\
                            <h3 class="card-title">Jyotirao &amp; Savitribai phule</h3>\
                            <p class="card-text">सभी प्राणियों में मनुष्य श्रेष्ठ है। और सभी मनुष्यों में नारी श्रेष्ठ है। स्त्री और पुरुष जन्म से ही स्वतंत्र है। इसलिए दोनों को सभी अधिकार सामान रूप से भोगने का अवसर मिलना चाहिए।</p>\
            </div>\
        </a>\
        </div>\
                    <div class="col-lg-3 mt-4 col-md-6">\
                        <a href="https://en.wikipedia.org/wiki/Swami_Vivekananda" target="_blank">\
                            <div class="box">\
                                <img src="assets/img/inspiration/SwamiVivekananda.png" class="img-fluid" alt="">\
                                <h3 class="card-title">Swami Vivekananda</h3>\
                                <p class="card-text">उठो, जागो और तब तक मत रुको जब तक लक्ष्य की प्राप्ति ना हो जाये।<br> खुद को कमजोर समझना सबसे बड़ा पाप हैं। </p>\
            </div>\
        </a>\
        </div>\
                        <div class="col-lg-3 mt-4 col-md-6">\
                            <a href="https://en.wikipedia.org/wiki/Mahatma_Gandhi" target="_blank">\
                                <div class="box">\
                                    <img src="assets/img/inspiration/mahatma_gandhi.png" class="img-fluid" alt="">\
                                    <h3 class="card-title">Mahatma Gandhi</h3>\
                                    <p class="card-text">आप मुझे बेडियों से जकड़ सकते हैं, यातना भी दे सकते हैं, यहाँ तक की आप इस शरीर को ख़त्म भी कर सकते हैं, लेकिन आप कदापि मेरे विचारों को कैद नहीं कर सकते</p>\
            </div>\
        </a>\
        </div>\
                            <div class="col-lg-3 mt-4 col-md-6">\
                                <a href="https://en.wikipedia.org/wiki/B._R._Ambedkar" target="_blank">\
                                    <div class="box">\
                                        <img src="assets/img/inspiration/dba.png" class="img-fluid" alt="">\
                                        <h3 class="card-title">Dr Babasaheb Ambedkar</h3>\
                                        <p class="card-text">"जिस तरह मनुष्य नश्वर है ठीक उसी तरह विचार भी नश्वर हैं। जिस तरह पौधे को पानी की जरूरत पड़ती है उसी तरह एक विचार को प्रचार-प्रसार की जरुरत होती है वरना दोनों मुरझा कर मर जाते है।"</p>\
            </div>\
        </a>\
        </div>\
                                <div class="col-lg-3 mt-4 col-md-6">\
                                    <a href="https://en.wikipedia.org/wiki/Subhas_Chandra_Bose" target="_blank">\
                                        <div class="box">\
                                            <img src="assets/img/inspiration/nscb.png" class="img-fluid" alt="">\
                                            <h3 class="card-title">Netaji Subhash Chandra Bose</h3>\
                                            <p class="card-text">"ये हमारा कर्तव्य है कि हम अपनी स्वतंत्रता का मोल अपने खून से चुकाएं. हमें अपने बलिदान और परिश्रम से जो आज़ादी मिलेगी, हमारे अन्दर उसकी रक्षा करने की ताकत होनी चाहिए."</p>\
            </div>\
        </a>\
        </div>\
                                    <div class="col-lg-3 mt-4 col-md-6">\
                                        <a href="https://en.wikipedia.org/wiki/Mother_Teresa" target="_blank">\
                                            <div class="box">\
                                                <img src="assets/img/inspiration/MotherTeresa.jpg" class="img-fluid" alt="">\
                                                <h3 class="card-title">Mother Teresa</h3>\
                                                <p class="card-text">चमत्कार यह नहीं है कि हम यह काम करते हैं, बल्कि यह है की ऐसा करने में हमें ख़ुशी मिलती है.</p>\
            </div>\
        </a>\
        </div>\
                                        <div class="col-lg-3 mt-4 col-md-6">\
                                            <a href="https://en.wikipedia.org/wiki/A._P._J._Abdul_Kalam" target="_blank">\
                                                <div class="box">\
                                                    <img src="assets/img/inspiration/apj.png" class="img-fluid" alt="">\
                                                    <h3 class="card-title">Dr.APJ Abdul Kalam</h3>\
                                                    <p class="card-text">"शिक्षण एक बहुत ही महान पेशा है जो किसी व्यक्ति के चरित्र, क्षमता, और भविष्य को आकार देता हैं। अगर लोग मुझे एक अच्छे शिक्षक के रूप में याद रखते हैं, तो मेरे लिए ये सबसे बड़ा सम्मान होगा।"</p>\
            </div>\
        </a>\
        </div>\
                                            <div class="col-lg-3 mt-4 col-md-6">\
                                                <a href="https://en.m.wikipedia.org/wiki/Ratanji_Tata" target="_blank">\
                                                    <div class="box">\
                                                        <img src="assets/img/inspiration/Sir_Ratan_Tata.jpg" class="img-fluid" alt="">\
                                                        <h3 class="card-title">Sir Ratan Tata</h3>\
                                                        <p class="card-text"> अपने जीवन की परिस्थितियों और अपनी प्रतिभाओं के अनुसार अपने लिए अवसर एवं चुनौतियों को चिन्हित करना चाहिए </p>\
            </div>\
            </a>\
            </div>\
        </div>\
        </div>\
    </section>';


    let inspiration = document.getElementById('inspiration');
    inspiration.innerHTML = replace;
    // console.log(inspiration);

    document.documentElement.style.setProperty('--box-padding','30px');
    document.documentElement.style.setProperty('--img-padding','30px 50px');
    document.documentElement.style.setProperty('--box-width','auto');

}