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
                having experience might not be as valuable as problem solving
                skills, determination, and a growth mindset. One could argue
                that everyone on your team is atypcial since they come from a
                wide variety of backgrounds and leverage their previous
                experience with Digital Harvest's new challenges.
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
              <br></br>
              <p className="font-weight-bold">On work history:</p>
              <blockquote className="ml-5">
                I understand my current resume might lead hiring managers to
                believe that I don't stay in one place too long. I'd like to
                address that.
                <br></br>
                <br></br>
                In my 20's I made a conscious choice to travel, and while there
                was never an extended period of time when I was out of work, my
                work supplimented my travels and by nature were short term. I
                attribute a well rounded set of soft-skills to this time period.
                Moving forward, I am very career focused, and would like to call
                my next role a forever role. I'm seeking to join a small but
                growing team that I can continue my skills development while
                working on new and interesting challenges that I can believe in.
                I'm certain that there is a market for technology in agriculture
                and I think that DH has something that can bring value to that
                industry. I'd like very much to be a part of that team.
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
              data-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Scaling and Storage Challenges
            </button>
          </h5>
        </div>
        <div
          id="collapseFour"
          className="collapse"
          aria-labelledby="headingThree"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="container bg-light text-dark">
              <h5>Growing Challenges</h5>
              <p>
                Not knowing the inner workings of your business operations or
                needs, this is a meant to be a broad overview of my undestanding
                of how AWS could play a role in a business looking for scaling,
                serving, and strorage services at a cost effective rate. I am by
                no means an expert in AWS, however, I do have a basic
                understanding of a lot of their most commonly used services that
                deal with computational and storage abilities.
              </p>
              <p className="font-weight-bold">AWS EC2 instances </p>
              <blockquote className="ml-5">
                AWS EC2 instances can be configured and scaled into just about
                any way your business needs require. If you're lookking for
                computational power over memory, you're able to configure that.
                Or visa versa if you're application is heavily memory dependant,
                then you're able to run a differenct EC2 instance to account for
                more memory storage, as well as anything inbetween.
                <br></br>
                <br></br>
                <p className="font-weight-bold">Pros </p>
                EC2 instances are highly scalable and can be automated to expand
                and detract as needed, making it very cost effective for
                businesses of all types. They also come in a wide range of
                options, highly configurable, and can be templated using Amazon
                Machine Imaging (AMI) to create as many individualized
                computational engines as needed within minutes.
                <br></br>
                <br></br>
                <p className="font-weight-bold">Cons </p>
                There is never a guarantee that the instance will have continous
                service, and if Amazon switches your instance to another
                physical server, then you lose all the memory available from
                that previous instance, unless you use either Elastic Block
                Storage (EBS) or Elastic File Share (EFS)
              </blockquote>
              <p className="font-weight-bold">
                Elastic Block Storage vs Elastic File Storage
              </p>
              <blockquote className="ml-5">
                EBS stores data on a file system which is stored even after an
                EC2 instance shuts down. It is highly available and elastic to
                scale to your data needs.
                <br></br>
                <br></br>
                <p className="font-weight-bold">Benefits include: </p>
                <ul>
                  <li>Performance Optimization</li>
                  <li>Low-Latency</li>
                  <li>Highly available and secure</li>
                  <li>
                    Geographically Interchangable - you can duplicate snapshots
                    throughout an AWS region and place data in multiple
                    locations, effectively making a data and disaster recovery
                    plan simple, or expanding geographic location simple.
                  </li>
                  <li>Point-in-time recovery</li>
                  <li>Rapid scale up or scale down ability</li>
                </ul>
                One drawback is that it is only accessable by a single EC2
                instance in that same particular AWS region.
                <br></br>
                <br></br>
                <p className="font-weight-bold"> Common use cases for EBS</p>
                <ul>
                  <li>Testing and development</li>
                  <li>NoSQL databases</li>
                  <li>Relational Databases</li>
                  <li>Business Consistency</li>
                  <li>Enterprise-Wide Applications</li>
                </ul>
                <br></br>
                EFS offers scalable file storage thats usable by multiple EC2
                instances and can be used for reliable, scalable file storage
                for applications or workloads. It is considered the best choice
                for running applications that have hight workloads and require
                scalable storage that needs output quickly.
                <br></br>
                <br></br>
                <p className="font-weight-bold">
                  Some of the benefits include:
                </p>
                <ul>
                  <li>
                    Scalable Performance - is able to provide higher throughput
                    for spikes in file growth
                  </li>
                  <li>
                    No advanced provisioning - since the service is fully
                    scalable, you only pay for the storage used, no need to
                    provision or guess at your storage needs
                  </li>
                  <li>
                    Accessable from anywhere - Local client machines as well as
                    EC2 instances can access the EFS structure at the same time.
                    Even EC2 instances outside the AWS region can access via VPC
                    peering.
                  </li>
                  <li>
                    Fully Managed - Amazon provides all maintanence and
                    servicing
                  </li>
                  <li>Cost Savings - only pay for the storage you use.</li>
                  <li>
                    Security and Compliance - Control who accesses the data
                    through IAM, VPC's or other permissions. EFS also is capable
                    of encrypting data in storage and in transit.
                  </li>
                </ul>
                <p className="font-weight-bold">Common use cases would be:</p>
                <ul>
                  <li>Big Data Analytics</li>
                  <li>Content management</li>
                  <li>Development and Testing</li>
                  <li>
                    Content management system - serving blogs, websites, and
                    archives
                  </li>
                </ul>
              </blockquote>
              <p className="font-weight-bold">AWS S3</p>
              <blockquote className="ml-5">
                Similar to EC2 instances, S3 buckets come in a wide range of
                configurable options. S3 provides object storage and can pretty
                much store any type of object. Each object is given a key for
                access through web requests from any location (think GET, POST,
                PUT, DELETE requests).
                <br></br>
                <br></br>
                <p className="font-weight-bold">Benefits include: </p>
                <ul>
                  <li>%99.999999999 (eleven total "9"s) data durability</li>
                  <li>Scalable performance and availability</li>
                  <li>
                    Cost-savings through storage classes (frequently accessed
                    data = more cost, less or rarely accessed data =
                    exponentially less cost)
                  </li>
                  <li>
                    Automation of data storage - meaning automatically shifts
                    data to less costs S3 buckets if integrated (ie: Data not
                    used in last 30 days is moved to lower cost tiered storage)
                  </li>
                  <li>
                    Built in and Configurable security features and Data control
                  </li>
                </ul>
                <p className="font-weight-bold">
                  Some use cases for S3 might include:
                </p>
                <ul>
                  <li>Big Data analytics</li>
                  <li>Backup and restoration</li>
                  <li>Disaster Recovery</li>
                  <li>
                    Archiving - rarely accessed data that still needs to be held
                    on to has a very cheap option from S3 Glacier and S3 Glacier
                    Deep archive
                  </li>
                </ul>
              </blockquote>
              <br></br>
            </div>
          </div>
        </div>
      </div>
      <div className="card">
        <div className="card-header" id="headingOne">
          <h5 className="mb-0">
            <button
              className="btn btn-link"
              data-toggle="collapse"
              data-target="#collapseFive"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Clarifying Questions
            </button>
          </h5>
        </div>

        <div
          id="collapseFive"
          className="collapse"
          aria-labelledby="headingOne"
          data-parent="#accordion"
        >
          <div className="card-body">
            <div className="container bg-light text-dark">
              <h5>Considerations for planning ahead</h5>
              <p>
                To get a better understanding of how to get to a fully scaled
                and built out service, here are some considerations that I would
                ask myself and my team.
              </p>
              <br></br>
              <p className="font-weight-bold">
                What type of data do we actually need to store?
              </p>
              <blockquote className="ml-5">
                I would consider the cost benefits of storing versions of data,
                the most recent version, all versions, or any combination of the
                inbetween. This would also look at the file type of what we are
                trying to store. Since most of the cost with AWS is based on
                actual storage space used, selecting an appropriate file type
                that balances our needs and space taken up would be something to
                figure out (GeoJSON file vs SHP file)
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                How often would you need to access data, Who needs to access it,
                and What are you doing with that data?
              </p>
              <blockquote className="ml-5">
                This would be an important question to answer when selecting
                which storage strategy to move forward with. If it needs to be
                accessed my one person at a time, or if it needs to be worked on
                by multiple people at the same time. Where is the ultimate
                source of truth when it comes to data integrity and how do you
                want to handle changes to that data become important
                considerations.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                How important is it to have the changes appear in real time?
              </p>
              <blockquote className="ml-5">
                An important concept when dealing with AWS is 'Eventual
                Consistency'. Meaning that changes made to a file might not be
                immediately reflected when calling that same file. Especially if
                when dealing with multiple AWS Regions.
              </blockquote>
              <br></br>
              <p className="font-weight-bold">
                Geographical location of users?
              </p>
              <blockquote className="ml-5">
                Not all AWS services are availabile in every AWS region, so
                there might be a tradeoff between offerings in each region.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interview;
