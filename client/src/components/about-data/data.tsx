import { Component, h } from '@stencil/core';

@Component({
  tag: 'about-data',
  styleUrl: 'data.css',
  shadow: false
})
export class Data {

  render() {
    return (
      [
      <ion-header>
        <ion-toolbar color="primary">
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/" />
          </ion-buttons>
          <ion-title>About The Data</ion-title>
        </ion-toolbar>
      </ion-header>
      ,
      <ion-content class="ion-padding">
              <h3>Support Our Efforts</h3>

              <p><b class="darkred">If you find this service useful, and/or believe that we are doing something that 
              is important and beneficial to humanity, PLEASE make a confidential, secure donation to one of the 
              addresses below. Your contribution will make a huge difference in ensuring that this project moves 
              forward at a rapid pace, and that I am able to continue working full-time on this and other projects, 
              projects which have the potential to make a direct impact on the course that this outbreak will take in the 
              critical weeks ahead</b></p> 

              <b>ETH and Tokens: 0x71dfD8f3664a6c9925D4275169721e1a0f4281fc</b><br />
              <b>BTC and Fiat currencies, contact me on Twitter below </b>

              <p>
              Whether or not you can make a donation, you have a critical role to play in what is shaping up to be a pivotal moment in human history! 
              This is not like a tsunami that causes devastation somewhere far away;
              it is more like an asteroid hurtling towards Earth, while we frantically try and knock it off its collision course. 

              <br /><br />
              <i>MIGHT</i> the novel corona virus cause a pandemic that costs 10 million or even 100 million human lives? YES.<br /> <br />
              <i>WILL</i> it? MAYBE! BUT WE CAN STOP THIS THING! If you remember the video game, "Plague, Inc" this is kind of like that - 
              except this time, you are one of the humans, playing against a virus that has many tricks up its sleeve. And you're playing for keeps.<br /><br />
              
              The single most remarkable thing about our species, 
              <i>homo sapiens</i>, is the degree to which we are able to alter our environment - that is why we are able to survive in 
              every possible climate region on Earth, despite lacking fur to keep warm, or claws and teeth for hunting prey. While our continued 
              destruction of our natural environment and ability to make other species go extinct is generally a bad thing, 
              today I am very grateful to be a human. For we most certainly have the ability, collectively, to make decisions that 
              protect each and every one of us as individuals - and also create a hostile environment for this awful virus, 
              so much that we can actually cause it to become extinct!
              <br /><br /> 
              We did it with smallpox (by co-ordinating between countries on a massive scale to vaccinate strategically). We have *massively* reduced HIV 
              transmission through behavioral changes (condom use), and in developed countries we can prevent those infected from developing the disease 
              of AIDS (antiviral medications). And we managed to stop the deadliest virus in the word, Ebola, from becoming a pandemic or even a widespread 
              regional *epidemic*, many times over: since 1976 when it emerged, the virus killed fewer than 20,000 people over multiple outbreaks, 
              which remained localized and relatively small. Why? Because teams of doctors and public health experts from all over the world were able to gain the trust of the affected 
              populations, and communicate their knowledge about how the disease was transmitted. This was in the face of fierce resistance from folks who had 
              little reason to trust Westerners, and aggravated by instability and war, but they succeeded (it is also said that without these issues, the epidemics 
              would have been controlled much sooner than they were).
              <br /><br />
              In other words: when humans communicate and co-operate across cultures, beliefs, and national boundaries, we are fully capable of victory against the worst diseases imaginable. 
              But it is far from clear that we are on the right track with the coronavirus; there are very significant political barriers, language barriers, cultural barriers we must overcome. 
              And the only way we will overcome it is when all of us are able to communicate with each other, freely, even when powerful interests collude 
              to censor real and important information about the virus and how it has spread. 
              </p>

              <p>Therefore, the Daily Corona project has been designed from the start to allow information to be exchanged safely and openly; 
                all of the data is stored permanently on a blockchain platform, <a href="https://arweave.net">The Arweave</a> that provides a highly censorship resistant data 
                source that anyone, anywhere, can access free of charge in their web browser. Right now, the raw data in the archive is what's 
                been released by "official" sources, which may or may not be honest. That is why the next version of this app will 
                provide a completely secure and anonymous means for *anyone* in the world to contribute critically important information, anonymously, 
                and for anyone else to access it, firewalls and filters be damned!
              </p>

              <p>
              I hope that you will join me in this effort, and that you will contribute whatever resources you can to the fight against 
              2019-nCoV. Financial contributions are the least of it - we all have our own unique skills, interests, 
              and social connections, and there are things we can all do to help out. Please follow me and receive updates <a href="https://twitter.com/2020writein">@2020WriteIn</a>, and I look forward to working with you! 
              </p>

        <h3>Are These Numbers Accurate?</h3>
        <p><b>Important!</b> Unlike most of the data you find on the Internet, which has social or economic value 
        but is not immediately actionable, the data you find here is not to be taken lightly. <br /><br />
        
        This tool will help you to understand data regarding the current state, and the historical record, of a humanitarian 
        tragedy that has caused a great deal of suffering, death, and destruction since early 2020, when 2019-nCov 
        (the "coronavirus") caused an outbreak of pneumonia in Wuhan, China, that has since spread to 26 countries and 
        resulted in at least 20,000 cases and 400 deaths in the past two weeks.</p>
        
        <p>
        While China has been hit harder than other countries at this point in time, there is a very serious risk 
        of the virus spreading out of control around the world. In other words, it is very possible that 
        the world will suffer a pandemic that will likely be far more serious than H1N1 in 2009, and perhaps 
        on the scale of Spanish Flu in 1918, which killed 50-100mil at a time when the world's population was 
        5x lower than it is today. The numbers contained in this dataset will help you to evaluate pandemic risk 
        as the situation unfolds, and to make predictions as to how deadly the virus really is. 

        </p>        
        <p>
        Although our "official" dataset matches the numbers published by WHO and therefore by the 
        countries affected by this outbreak, this does not guaranteee the accuracy of any of it: 
        the numbers are given to the WHO by the health authorities of each country affected 
        by the virus, and are therefore as reliable as their specific source.    
        </p>

        <p>
        Other than the obvious risk that certain countries may misrepresent  
        their data on purpose, for political or economic reasons, there is a wider issue, 
        which is that it is difficult to accurately track cases and deaths *during* an epidemic - 
        indeed, we will need to wait until the epidemic is under control before we can get a 
        precise assessment of the damage it has caused. 
        <br /><br />
        In the midst of a serious outbreak, sometimes mild cases will 
        be missed, as medical resources are overwhelmed dealing with serious cases. 
        Sometimes deaths may not be reported in a timely way because the medical examiners are 
        also very busy, processing more deaths than their office is equipped to handle. 
        This type of error can affect case and death totals reported by regional authorities, and may cause 
        calculations such as case fatality rate to be inaccurate (in either direction) 
        <br /><br />

        Because the improper interpretation of such data could result in bad decisions that cost lives or cause unnecessary panic and disruption, 
        you are encouraged to be EXTREMELY CAUTIOUS and to consult other sources (e.g. eyewitness reports 
        and the statements of epidemiologists) in combination with the numbers available here.     


        <b><i>To be clear: the master dataset in our archives comes from WHO. The WHO 
        gets their data from government sources in each country affected by the coronavirus. No 
        independent verification of the data has been performed</i></b>
        </p>

        <p>
        We try and stay out of politics, so I won't share my personal opinion as to the quality of data being shared 
        by any specific country. That said, it appears the data is following plausible trends - so it is definitely worth 
        studying and analyzing, as long as you remember that the numbers themselves are not necessarily correct!</p>


        <p>
        Sincerely,<br />
        Sam Rahimi<br />
        Founder<br />
        The Daily Corona
        https://github.com/daily-corona
        </p>
      </ion-content>
      ]
    );
  }

}
