import React from "react";
import "../App.css";

function Interview() {
  return (
    <div id="accordion">
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Interview Questions Summary
            </button>
          </h5>
        </div>

        <div
          id="collapseOne"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="container bg-light text-dark">
              <h5>Interview Summary</h5>
              <p>
                Summeraizing the interview portion of our conversation, I would
                describe my candidacy as a long shot underdog. I understand from
                the getgo that the number one hesitation is lack of experience.
                I appreciate your direct and informal interview style which I
                precieve to be your management style. Below are my main
                takeaways from our interview conversation:
              </p>
              <br></br>
              <p className="font-weight-bold">
                When asked about my years of experience with Software
                Development:
              </p>
              <blockquote className="ml-5">
                In terms of professional experience, I have less than a years
                worth working with technology in a professional setting.
                However, I'd like to stress that I've been practicing and
                learning the fundamentals of development, both self-taught as
                well as professionally instructed, for the past 3 years where I
                have completed a number of full stack projects (including this
                one!) that involve a high level of understanding of languages,
                basic principles, deployment, databases, and other concepts of
                technology.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                When told that I will have to earn it:
              </p>
              <blockquote className="ml-5">
                This was my passion pitch. I spoke from the heart and shared my
                goal of breaking into the industry and making a difference in
                something that I believe in. Making an environmental impact in
                sustainable farming practices is not just something I would like
                to make a difference in, I believe it's an absoulte necessity
                for the furture of our planet on the macro level. I'm a firm
                believer that no challenge is insurmountable given enough time,
                dedication, and passion.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                When asked about why I got into Development:
              </p>
              <blockquote className="ml-5">
                Originally I got into development to build out my own mapping
                application when I was traveling, this was my first encounter
                with GIS type files. At the time, I had no background in
                technology, however, I was able to partner with a development
                team and complete my project while learning on my own how to
                code. When I decided on a career switch a few years ago, I
                looked at my strengths and passions and decided that Software
                Development would be an excellent choice to build a career upon
                because of my love of problem solving, challenges, creativity,
                and love of building things.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                When asked about why I applied for this role:
              </p>
              <blockquote className="ml-5">
                I felt after reading the description that I would potentially be
                an excellent match. I feel confident in my React skills and
                ability to work in both front and backend applications as well
                as built out full projects using all the technologies listed in
                the "Familiarites Preferred" section of the job description.
                I've been exposed to GIS file types, but have had very limited
                experience working with them. I also consider myself naturally
                inquisitive and a prolific learner who gets excited about new
                challenges and takes pride in the work he does. As mentioned
                before, I've always been interested in learning how to apply
                technology in the Agriculture industry and feel it is a
                massively underutilized market, and one that is extremely
                important.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingTwo">
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              My Questions Summary
            </button>
          </h5>
        </div>
        <div
          id="collapseTwo"
          className="collapse"
          aria-labelledby="headingTwo"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="container bg-light text-dark">
              <h5>My Questions Summary</h5>
              <p>
                My initial question lead to a rich conversation about the
                expertise that makes up Digital Harvest, and how its applying
                its aerospace expertise to become the leading digital ally for
                the sugarcane industry, its plans for the future and the
                challenges that your team is facing.
              </p>
              <br></br>
              <p className="font-weight-bold">
                On how Digital Harvest came to be:
              </p>
              <blockquote className="ml-5">
                Learning about how applying areospace technology with unmanned
                drones was able to help in agriculture was very interesting. You
                didn't mention this in the conversation, but I read about a
                partnership that your team did with WSU and applying unmanned
                aircraft to help with cherry harvests and removing rainwater off
                trees to slow rippening. I've seen this type of technique
                firsthand with wine grapes and how on frosty nights before
                harvest, wine growers would use helicopters to push warmer air
                down into fields to help prevent grapes from freezing. One of
                many examples of how a digital overhaul in the agriculture
                business could save millions for specific industries.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                On how Digital Harvest reduced the amount of data points and
                drone imagry:
              </p>
              <blockquote className="ml-5">
                I was particularly curious about this response when asked about
                why they have reduced the number of data points. From a non-data
                scientist background, I found it counter intuitive to hear about
                why this happend. After Young took the time to explain that
                satelite imagry was "good enough" to provide meaningful results,
                the answer became more clear to me.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                On the difference of "field" level and "macro" level and why its
                important:
              </p>
              <blockquote className="ml-5">
                Young's analogy of using the GDP of a nation to estimate the
                upcoming years GDP was an excellent example of conveying what
                "macro" means in the farming sense. While the information is
                useful, the million dollar question that potential clients is
                "how is this useful to me and my farming operations?". This
                shows why the value of providing accurate "field" level
                projections is important. Your team is catering to each
                individual field to help provide guidance and value for harvest
                planning, which could equate to millions of dollars per year in
                realized revenue.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                On the weather factor and how IBM Watson plays a role:
              </p>
              <blockquote className="ml-5">
                I enjoyed hearing about the largest "X" factor in your
                prediction models being weather. I'm also extremely interested
                to see how well Machine Learning will be able to predict weather
                patterns up to 6 months in advance and what that would mean for
                Digital Harvest's business model and to farm planning for the
                end user.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                On what the largest current challenge is for this position:
              </p>
              <blockquote className="ml-5">
                My understanding of this upcoming challenge is to have a fully
                working platform to visualize data for the end user by the end
                of Q4. This would mean that you have a backend scalable database
                that is able to ingest hundreds of thousands, possibly millions,
                of polygon shape files. How this interacts with Watson and the
                overall strategy for Digital Harvest, I don't have an answer,
                but am certainly curious in learning more.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingThree">
          <h5 className="mb-0">
            <button
              className="btn btn-link collapsed"
              data-toggle="collapse"
              data-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Objections and Handlers
            </button>
          </h5>
        </div>
        <div
          id="collapseThree"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="container bg-light text-dark">
              <h5>Why Me?</h5>
              <p>
                As mentioned, I know I'm the longshot option among many other
                talented developers that you've no doubt been able to attract.
                I'd like to include this section to handle any hesitations and
                objections you might have when considering my candidacy.
              </p>
              <br></br>
              <p className="font-weight-bold">
                On being an atypical candidate:
              </p>
              <blockquote className="ml-5">
                I don't view this as a bad thing, but rather a compliment. I
                don't have a CS degree, I haven't worked for large organizations
                in a technical realm, and I am new to the industry.
                <br />
                <br />
                With that being said, I've shown initiative, grit, and
                determination to get things done on my own, including
                transistioning careers and learning a new valuable skillset
                through self-learning and professional training. Per the role
                description, your team is looking for a "Naturally inquisitive
                and prolific learner". I feel confident that my peers and
                supervisors would agree that I fit that description. While I've
                worked for large international firms before in the past, I feel
                more drawn to the constantly shifting priorities of a smaller
                startup without all the heiarchle red tape that makes larger
                firms slow to change. Lastly, being new to the industry can be
                viewed as teachable and willing to go the extra mile. And since
                Digital Harvest is doing things that haven't been done before,
                experience might not be as valuable as problem solving skills,
                determination, and a growth mindset. One could argue that
                everyone on your team is atypcial since they come from a wide
                variety of backgrounds and leverage their previous experience
                with Digital Harvest's new challenges.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">On the cost of learning curve:</p>
              <blockquote className="ml-5">
                My rebuttle for this arguement is "How much would you pay for
                the 'Perfect' Candidate?" vs "How much would you pay someone
                willing to start at the bottom and learn their way up to be a
                valuable team member?"
                <br></br>
                <br></br>
                In my point of view, your investment in me would be a bargain.
                You're gaining a mature, world-minded, hard-working
                problem-solver who thrives in small working teams. Yes, there
                will be a learning curve, but if your company culture encourages
                each team member to ask questions and to be naturally
                inquisitive, then I have no doubt that I would be able to meet
                expectations in the introductory period.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
