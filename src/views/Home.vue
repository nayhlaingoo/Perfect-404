<template>
  <section>
    <Hero />
  </section>

  <section class="relative py-10">
    <div class="bg-rose w-px h-[90%] lg:absolute left-1/2"></div>
    <div
      class="px-5 md:px-10 lg:flex flex-row justify-around items-center mb-7"
    >
      <div class="flex flex-col justify-evenly items-center">
        <div class="lg:max-w-lg max-w-screen-md">
          <h1 class="mb-7 text-4xl font-bold text-rose font-primary">
            Who We Are.
          </h1>
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            quaerat facere eveniet non dolor reiciendis, tempora eaque omnis.
            Consectetur libero sit aliquam laudantium optio, harum a minus
            itaque nihil quam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate ipsum facere placeat maiores iste
            tempora obcaecati? Illo, fuga veniam totam tenetur repellendus
            placeat? Excepturi repellendus ipsum nobis iure voluptate possimus!
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md lg:mt-14 my-10">
          <h1 class="mb-7 text-left text-4xl font-bold text-rose font-primary">
            What We Do.
          </h1>
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
            quaerat facere eveniet non dolor reiciendis, tempora eaque omnis.
            Consectetur libero sit aliquam laudantium optio, harum a minus
            itaque nihil quam? Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Voluptate ipsum facere placeat maiores iste
            tempora obcaecati? Illo, fuga veniam totam tenetur repellendus
            placeat? Excepturi repellendus ipsum nobis iure voluptate possimus!
          </p>
        </div>
      </div>

      <div class="flex flex-col justify-evenly items-center lg:pl-14">
        <div class="lg:max-w-lg max-w-screen-md">
          <h1
            class="mb-7 text-3xl font-bold text-rose font-primary border-b border-rose"
          >
            Our Vision
          </h1>
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quos
            facere, perferendis aliquam dolores, quia fuga iure veniam ullam
            corrupti deleniti esse provident quas, numquam natus vitae quidem
            dolorum dignissimos.
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md lg:my-14 my-10">
          <h1
            class="mb-7 text-3xl font-bold text-rose font-primary border-b border-rose"
          >
            Our Future
          </h1>
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis
            ipsa eligendi, voluptatum magni error debitis sit.
          </p>
        </div>
        <div class="lg:max-w-lg max-w-screen-md">
          <h1
            class="mb-7 text-3xl font-bold text-rose font-primary border-b border-rose"
          >
            Our Bootcamp
          </h1>
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut facilis
            ipsa eligendi, voluptatum magni error debitis sit excepturi
            cupiditate est, esse modi expedita, quasi enim sapiente atque
            ratione eum molestiae!
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="my-14">
    <div class="bg-accent/20 shadow-accent/20 shadow-[0px_0px_100px_100px]">
      <div class="px-5 md:px-10">
        <div
          class="bg-rose w-10 h-10 rounded-full flex justify-center items-center my-3 shadow-md"
        >
          <i class="fas fa-code text-white text-xl"></i>
        </div>
        <h1 class="text-rose font-primary font-bold text-4xl mb-3">
          There is shortage of
        </h1>
        <h1 class="text-rose font-primary font-bold text-4xl">
          software engineer in south east asia.
        </h1>
        <div class="max-w-3xl my-5">
          <p class="text-accentsFont font-accent">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A dolore
            facere nemo maiores veniam quam corporis, expedita reiciendis
            quisquam esse soluta nesciunt atque nam quas blanditiis rerum magnam
            molestiae quo.
          </p>
        </div>
      </div>

      <div
        class="lg:flex flex-row justify-between mt-14 py-7 px-5 md:px-10 bg-[url('@/assets/earth.jpg')] shadow-black shadow-[0px_0px_100px_70px_inset] bg-center bg-cover bg-fixed"
      >
        <div class="lg:w-1/2 lg:pr-5 lg:mb-0 mb-7">
          <h1 class="text-rose font-primary font-bold text-xl pl-3 mb-5">
            What is Software Development?
          </h1>
          <div
            class="lg:pt-7 p-3 rounded-md bg-black/80 shadow-black/80 shadow-[0px_0px_20px_60px]"
          >
            <p class="text-accentsFont font-accent">
              A software developer, sometimes called a computer programmer, a
              programmer or more recently a coder. They need to know computer
              language such as (e.g. C, C#, Ruby, JavaScript, Python, Java etc).
              There is no industry-wide standard terminology, so "programmer"
              and "software developer" might refer to the same role at different
              companies. They might be self-taught or attended a programming
              bootcamp.
              <!-- Most typically, someone with a job title of
              "programmer" or "software developer" might focus on implementing a
              detailed specification into computer code, fixing bugs, and
              performing code reviews. -->
            </p>
          </div>
        </div>

        <div class="lg:w-1/2">
          <h1 class="text-rose font-primary font-bold text-xl mb-5">
            Average software developer salary around the world.
          </h1>
          <div
            class="bg-slate-100 rounded-md shadow-lg pt-5 h-64 overflow-auto"
          >
            <table
              class="text-primaryFont font-accent w-full text-sm border-collapse table-auto"
            >
              <thead class="text-left">
                <tr class="sticky -top-5 bg-slate-100/50 backdrop-blur-sm">
                  <th class="pl-2 py-3 pr-0">Country</th>
                  <th class="py-3 pr-0">Junior Salary</th>
                  <th class="py-3 pr-0">Senior Salary</th>
                </tr>
              </thead>
              <tbody class="bg-slate-300/30">
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">USA</td>
                  <td class="border-y border-slate-300">$64,607</td>
                  <td class="border-y border-slate-300">$113,810</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">UK</td>
                  <td class="border-y border-slate-300">$55,044</td>
                  <td class="border-y border-slate-300">$97,830</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Australia</td>
                  <td class="border-y border-slate-300">$68,489</td>
                  <td class="border-y border-slate-300">$121,725</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Germany</td>
                  <td class="border-y border-slate-300">$63,570</td>
                  <td class="border-y border-slate-300">$112,983</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Netherlands
                  </td>
                  <td class="border-y border-slate-300">$56,000</td>
                  <td class="border-y border-slate-300">$99,000</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Norway</td>
                  <td class="border-y border-slate-300">$65,825</td>
                  <td class="border-y border-slate-300">$116,991</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Switzerland
                  </td>
                  <td class="border-y border-slate-300">$76,555</td>
                  <td class="border-y border-slate-300">$136,061</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Denmark</td>
                  <td class="border-y border-slate-300">$65,353</td>
                  <td class="border-y border-slate-300">$116,151</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Singapore</td>
                  <td class="border-y border-slate-300">$52k</td>
                  <td class="border-y border-slate-300">$93k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Malaysia</td>
                  <td class="border-y border-slate-300">$22k</td>
                  <td class="border-y border-slate-300">$39k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Thailand</td>
                  <td class="border-y border-slate-300">$18k</td>
                  <td class="border-y border-slate-300">$32k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Vietnam</td>
                  <td class="border-y border-slate-300">$15k</td>
                  <td class="border-y border-slate-300">$26k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">
                    Philippines
                  </td>
                  <td class="border-y border-slate-300">$10k</td>
                  <td class="border-y border-slate-300">$18k</td>
                </tr>
                <tr>
                  <td class="pl-2 py-2 border-y border-slate-300">Indonesia</td>
                  <td class="border-y border-slate-300">$17k</td>
                  <td class="border-y border-slate-300">$30k</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="md:px-10">
    <div class="lg:flex flex-row justify-center items-end">
      <div class="lg:w-1/2 md:w-3/4 w-full px-5 md:px-0">
        <h1 class="text-rose text-4xl font-primary font-bold">
          Scale Up Your Skills
        </h1>
        <p class="text-accentsFont font-accent my-7">
          Want to become a future software developer? <br />
          We are here to guide you in every your steps. Level up your coding
          skills and quickly land a job with tech companies. This is the best
          place to expand your programming knowledge and get prepared for your
          next interview.
        </p>
        <ButtonPrimary class="lg:mb-12" label="Contact Us Now" />

        <h1
          class="text-rose text-2xl md:text-3xl font-primary font-bold mt-7 mb-4"
        >
          Types of developer
        </h1>
        <p
          class="bg-accent/5 text-accentsFont font-accent rounded-md shadow-xl p-3 w-3/4 text-sm"
        >
          <b class="text-primaryFont">Frontend development</b> of the user
          interface of a website, through the use of HTML,CSS & JavaScript.
        </p>
        <p
          class="bg-accent/5 text-accentsFont font-accent rounded-md shadow-xl p-3 w-3/4 text-sm"
        >
          <b class="text-primaryFont">Backend development</b> is also known as
          server-side development, databases,backend logic & APIs.
        </p>
        <p
          class="bg-accent/5 text-accentsFont font-accent rounded-md shadow-xl p-3 w-3/4 text-sm"
        >
          <b class="text-primaryFont">FullStack development</b> is expected to
          be able to work in all the layers. They can develop both client and
          server software.
        </p>
      </div>
      <div
        class="lg:grid lg:grid-cols-3 grid grid-cols-3 gap-x-10 md:w-4/5 w-full mx-auto md:ml-auto"
      >
        <div class="flex flex-col justify-end items-end">
          <div class="bg-accent/50 shadow-lg rounded-md p-4">
            <h2 class="text-primary text-2xl mb-5">01.</h2>
            <h1 class="text-primaryFont font-primary font-bold text-xl mb-5">
              Frontend skills
            </h1>
            <ul class="text-accentsFont font-accent md:text-sm text-xs">
              <li class="py-1">UI/UX</li>
              <li class="py-1">HyperText Markup Language</li>
              <li class="py-1">Cascading Style Sheets</li>
              <li class="py-1">JavaScript</li>
              <li class="py-1">Frameworks</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-end items-end">
          <div class="bg-accent/50 shadow-lg rounded-md p-4">
            <h2 class="text-primary text-2xl mb-5">02.</h2>
            <h1 class="text-primaryFont font-primary font-bold text-xl mb-5">
              Backend skills
            </h1>
            <ul class="text-accentsFont font-accent md:text-sm text-xs">
              <li class="py-1">Node. JS</li>
              <li class="py-1">Python</li>
              <li class="py-1">Hypertext Preprocessor(PHP)</li>
              <li class="py-1">Ruby</li>
              <li class="py-1">GraphQL (Database)</li>
              <li class="py-1">Server</li>
              <li class="py-1">Rest & Soap (API)</li>
              <li class="py-1">Testing/Debugging</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col justify-end items-end mt-4">
          <div class="bg-accent/50 shadow-lg rounded-md p-4">
            <h2 class="text-primary text-2xl mb-5">03.</h2>
            <h1 class="text-primaryFont font-primary font-bold text-xl mb-5">
              FullStack skills
            </h1>
            <ul class="text-accentsFont font-accent md:text-sm text-xs">
              <li class="py-1">HTML/CSS</li>
              <li class="py-1">CSS/JS Frameworks</li>
              <li class="py-1">Git/Github</li>
              <li class="py-1">configuring Linux servers</li>
              <li class="py-1">server-side APIs</li>
              <li class="py-1">Database Management</li>
              <li class="py-1">Project Management</li>
              <li class="py-1">Algorithm & Data Structure</li>
              <li class="py-1">Testing/Debugging</li>
              <li class="py-1">Security</li>
              <li class="py-1">Web Architecture</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20">
    <div
      class="bg-accent/20 shadow-accent/20 shadow-[0px_0px_70px_70px] text-rose py-8"
    >
      <div
        class="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-2"
      >
        <div
          class="flex flex-col w-2/3 sticky md:top-32 lg:w-1/3 mt-2 md:mt-0 px-5 md:mb-0 mb-7"
        >
          <h2 class="ml-2 text-darkrose font-primary tracking-loose">
            From Beginner
          </h2>
          <h1 class="text-5xl font-primary font-bold mt-2">
            Become Job Ready.
          </h1>
          <p class="text-accentsFont font-accent mt-4">
            We are here to guide you in every your steps.
          </p>
          <p class="text-accentsFont font-accent flex mt-3">
            <span class="flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-red-500"
              ></span>
            </span>
            First learn with us then,
          </p>
          <p class="text-accentsFont font-accent flex mt-3">
            <span class="flex h-3 w-3">
              <span
                class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-red-500"
              ></span>
            </span>
            Work with us.
          </p>
          <ButtonPrimary class="md:w-1/2 w-3/4" label="Startup Now" />
        </div>
        <div class="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div class="container mx-auto w-full h-full">
            <div class="relative wrap overflow-hidden p-4 h-full">
              <div
                class="absolute h-full border-x-2 border-rose right-1/2"
              ></div>
              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    1-6 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Registration
                  </h1>
                  <p class="leading-snug text-accentsFont font-accent">
                    Pick your favourite event(s) and register in that event by
                    filling the form corresponding to that event. Its that easy
                    :)
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-left">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    6-9 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Participation
                  </h1>
                  <p class="leading-snug text-accentsFont font-accent">
                    Participate online. The links for your registered events
                    will be sent to you via email and whatsapp groups. Use those
                    links and show your talent.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline"
              >
                <div class="order-1 w-5/12"></div>
                <div class="order-1 w-5/12 px-1 py-4 text-right">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    10 May, 2021
                  </h2>
                  <h1 class="mb-3 font-bold font-primary text-lg md:text-2xl">
                    Result Declaration
                  </h1>
                  <p class="leading-snug text-accentsFont font-accent">
                    The ultimate genius will be revealed by our judging panel on
                    10th May, 2021 and the resukts will be announced on the
                    whatsapp groups and will be mailed to you.
                  </p>
                </div>
              </div>

              <div
                class="mb-8 flex justify-between items-center w-full right-timeline"
              >
                <div class="order-1 w-5/12"></div>

                <div class="order-1 w-5/12 px-1 py-4">
                  <h2 class="mb-3 text-base font-primary text-darkrose">
                    12 May, 2021
                  </h2>
                  <h1
                    class="mb-3 font-bold font-primary text-lg md:text-2xl text-left"
                  >
                    Prize Distribution
                  </h1>
                  <p class="leading-snug text-accentsFont font-accent">
                    The winners will be contacted by our team for their
                    addresses and the winning goodies will be sent at their
                    addresses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-20">
    <h1
      class="my-4 text-center font-primary text-4xl text-rose"
    >
      Help make a change
    </h1>
    <h1 class="text-rose font-primary text-center text-2xl mb-3">Learn to code with 404</h1>
    <main
      class="sm:px-5 pb-20 bg-[url('@/assets/gridbg1.png')] shadow-cyan-200/20 shadow-[500px_200px_500px_00px_inset] border-slate-300 border-y"
    >
      <div class="md:flex md:justify-between md:items-center w-full my-20">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-96 w-full md:w-1/2 block md:hidden"
          :code="htmlCode"
          language="language-html"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pr-0">
            <Browser label="">
              <h1 class="font-bold">Html Code Example</h1>
              <div>
                <img
                  class="w-[50px]"
                  src="@/assets/profile-img.jpg"
                  alt="profile-image"
                />
                <div>
                  <h1 class="font-bold">Alex</h1>
                  <p>
                    Hey! I'am Alex. I'am going to show you the differents
                    between HyperText Markup Language (Html), Cascading Style
                    Sheets (Css) and JavaScript (JS).
                  </p>
                  <button class="border-black border text-xs">Dark mode</button>
                </div>
              </div>
              <p>
                <span>Note:</span>This is how HTML code looks like on webpage
                (without css) especially dark mode button doesn't work when you
                click.
              </p>
            </Browser>
          </div>
        </div>
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-96 w-full md:w-1/2 hidden md:block"
          :code="htmlCode"
          language="language-html"
        />
      </div>

      <div class="md:flex md:justify-between md:items-center w-full mb-20">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-80 w-full md:w-1/2"
          :code="cssCode"
          language="language-css"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pl-0">
            <Browser label="">
              <h1
                class="text-primaryFont text-center font-primary font-bold text-xl mt-5"
              >
                Css Code Example
              </h1>
              <div
                class="relative w-2/3 bg-slate-900/5 shadow-md rounded-md px-3 mt-5 mb-5 mx-auto"
              >
                <img
                  class="absolute -top-5 left-2 w-[35px] h-[40px] rounded-lg shadow-lg"
                  src="@/assets/profile-img.jpg"
                  alt="profile-image"
                />
                <div class="pt-7 pb-3">
                  <h1 class="text-primaryFont mb-1 text-lg font-primary">
                    Alex
                  </h1>
                  <p class="text-accentsFont mb-2 text-sm font-accent">
                    Hey! I'am Alex. I'am going to show you the differents
                    between HyperText Markup Language (Html), Cascading Style
                    Sheets (Css) and JavaScript (JS).
                  </p>
                  <ButtonPrimary
                    class="text-xs px-3 py-1.5"
                    label="Dark mode"
                  />
                </div>
              </div>
              <p
                class="text-accentsFont font-accent text-xs mb-5 text-center w-3/4 mx-auto"
              >
                <span class="font-primary">Note:</span>This is how CSS code
                looks like on webpage (without JS) especially dark mode button
                doesn't work when you click.
              </p>
            </Browser>
          </div>
        </div>
      </div>

      <div class="md:flex md:justify-between md:items-center w-full">
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-72 w-full md:w-1/2 block md:hidden"
          :code="javascriptCode"
          language="language-javascript"
        />
        <div class="w-[97%] md:w-1/2 md:mx-2 rounded-md mx-auto">
          <div class="pl-0">
            <Browser label="">
              <div :class="darkMode ? 'dark' : ''">
                <h1
                  class="text-primaryFont text-center font-primary font-bold text-xl mt-5"
                >
                  JS Code Example
                </h1>
                <div
                  class="relative w-2/3 dark:bg-black bg-slate-900/5 shadow-md rounded-md px-3 mt-5 mb-5 mx-auto"
                >
                  <img
                    class="absolute -top-5 left-2 w-[35px] h-[40px] rounded-lg shadow-lg"
                    src="@/assets/profile-img.jpg"
                    alt="profile-image"
                  />
                  <div class="pt-7 pb-3">
                    <h1
                      class="text-primaryFont dark:text-slate-100 mb-1 text-lg font-primary"
                    >
                      Alex
                    </h1>
                    <p
                      class="text-accentsFont dark:text-slate-300 mb-2 text-sm font-accent"
                    >
                      Hey! I'am Alex. I'am going to show you the differents
                      between HyperText Markup Language (Html), Cascading Style
                      Sheets (Css) and JavaScript (JS).
                    </p>
                    <ButtonPrimary
                      @click="darkMode = !darkMode"
                      class="text-xs px-3 py-1.5 dark:bg-slate-200 dark:text-slate-900"
                      label="Dark mode"
                    />
                  </div>
                </div>
                <p
                  class="text-accentsFont font-accent text-xs mb-5 text-center w-3/4 mx-auto"
                >
                  <span class="font-primary">Note:</span>This is how JS code
                  work, Now dark mode button can apply dark theme when you
                  click.
                </p>
              </div>
            </Browser>
          </div>
        </div>
        <CodeBlock
          class="overflow-auto rounded-md scrollbar-hide h-72 w-full md:w-1/2 hidden md:block"
          :code="javascriptCode"
          language="language-javascript"
        />
      </div>
    </main>
  </section>

  <section class="my-10">
    <h1 class="text-rose font-primary font-bold text-4xl text-center">
      But there are some more
    </h1>
    <div
      class="bg-slate-50 font-accent bg-[url('@/assets/tailwindbg.png')] bg-fixed bg-center shadow-md rounded-md px-4 w-11/12 py-12 mt-7 mx-auto"
    >
      <div class="flex flex-row justify-around items-center flex-wrap">
        <div
          class="bg-sky-400 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/react.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">React</p>
        </div>
        <div
          class="bg-green-500 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/vue.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">Vue</p>
        </div>
        <div
          class="bg-red-700 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/angular.jpg"
            alt=""
          />
          <p class="text-white text-sm mt-1">Angular</p>
        </div>
        <div
          class="bg-amber-400 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/python.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Python</p>
        </div>
        <div
          class="bg-blue-600 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/bootstrap.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Bootstrap</p>
        </div>
        <div
          class="bg-sky-700 w-32 h-20 rounded-md shadow-xl flex flex-col justify-center items-center mx-2 my-4"
        >
          <img
            class="w-10 h-10 rounded-full shadow-md"
            src="@/assets/typescript.png"
            alt=""
          />
          <p class="text-white text-sm mt-1">Typescript</p>
        </div>
      </div>
      <router-link to="/course">
        <ButtonWhite class="mx-auto mt-10 shadow-xl" label="View all courses" />
      </router-link>
    </div>
  </section>

  <section>
    <About />
  </section>

  <section>
    <Review />
  </section>

  <section>
    <Footer />
  </section>
</template>

<script>
import CodeBlock from "../components/CodeBlock.vue";
import Hero from "../components/Hero.vue";
import Review from "../components/Review.vue";
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonWhite from "../components/ButtonWhite.vue";
import Footer from "../components/footer.vue";
import Browser from "../components/Browser.vue";
import About from "../components/About.vue";
export default {
  name: "Home",
  components: {
    Hero,
    CodeBlock,
    ButtonPrimary,
    ButtonWhite,
    Footer,
    Review,
    Browser,
    About,
  },
  data() {
    return {
      darkMode: false,

      htmlCode: `<!DOCTYPE html>
  <head>
    <link rel="stylesheet" href="./style.css" />
    <title>Code Example</title>
  </head>
  <body>
      <div class="card">
          <img src="./img.jpg" width="50" height="57" alt="profile-image">
          <div class="card-body">
              <div class="title">
                  <h1>Alex</h1>
              </div>
              <div class="text">
                  <p>
                    The HyperText Markup Language, or HTML is the standard markup
                    language for documents designed to be displayed in a web
                    browser. It can be assisted by technologies such as Cascading
                    Style Sheets and scripting languages such as JavaScript.
                  </p>
              </div>
              <button onclick="darkMode()" class="btn">Click</button>
          </div>
      </div>
      <p class="footer-text">
        <span>Note:</span>This is how CSS code looks like on webpage (without JS) especially 
        button doesn't work when you click.
      </p>
  </body>
</html>`,
      cssCode: `*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    width: 50%;
    height: 100%;
    margin-inline: auto;
}
.card{
    background: whitesmoke;
    width: 66%;
    margin-inline: auto;
    margin-top: 4rem;
    position: relative;
    border-radius: 0.7rem;
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.11);
}
img{
    position: absolute;
    top: -2rem;
    left: 1rem;
    border-radius: 3rem;
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.342);
}
.card-body{
    padding-inline: 0.7rem;
    padding-top: 2.3rem;
    padding-bottom: 1rem;
}
.title{
    color: #000;
    margin-bottom: 0.7rem;
    font-family: sans-serif;
}
.text{
    color: rgb(73, 73, 73);
    margin-bottom: 0.8rem;
    font-family: sans-serif;
    font-size: small;
}
.btn{
    background: #000;
    color: white;
    border: none;
    font-size: 14px;
    padding-inline: 10px;
    padding-block: 3px;
    border-radius: 0.3rem;
    cursor: pointer;
    transition: 0.2s;
}
:hover.btn{
    background: rgba(0, 0, 0, 0.712);
}
.footer-text{
    width: 66%;
    margin-inline: auto;
    color: rgb(73, 73, 73);
    margin-bottom: 0.8rem;
    font-family: sans-serif;
    font-size: small;
    text-align: center;
    margin-top: 1rem;
}
span{
    color: #000;
    font-weight: bold;
}
.dark-mode {
    background-color: black;
}`,
      javascriptCode: `const cardClass = document.querySelector(".card");
const titleClass = document.querySelector(".title");
const textClass = document.querySelector(".text");
const btnClass = document.querySelector(".btn");

let status = 0;

function darkMode() {
    cardClass.classList.toggle("dark-mode");
    if (status === 0) {
        titleClass.style.color = ('white');
        textClass.style.color = ('white');
        btnClass.style.background = ('white');
        btnClass.style.color = ('black');
        status++;
    }
    else if (status === 1){
        titleClass.style.color = ('');
        textClass.style.color = ('');
        btnClass.style.background = ('');
        btnClass.style.color = ('');
        status--;
    }
}`,
    };
  },
};
</script>
