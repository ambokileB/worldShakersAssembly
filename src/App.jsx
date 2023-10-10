import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      
      if (scrollTop > lastScrollTop) {
        // Scrolling down, hide the navbar
        setHideNavbar(true);
      } else {
        // Scrolling up, show the navbar
        setHideNavbar(false);
      }
      
      lastScrollTop = scrollTop;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='main'>
      <nav id='navbar' style={{ top: hideNavbar ? '-80px' : '0' }}>
        <div><a href="">World shaker Assembly</a></div>
        <ul>
          <li><a href="">Home </a></li>
          <li><a href="">About </a></li>
          <li><a href="">Service </a></li>
          <li><a href="">Contact us </a></li>
        </ul>
      </nav>
      <section>
      <p>There is no question that object-oriented analysis and design (OOAD) is becoming more and more popular (we elaborate on this approach later throughout the book). OOAD is often called the third approach to systems development,
           after the process- oriented and data-oriented approaches. The object-oriented approach combines data and processes (called methods) into single entities called objects. Objects usually correspond to the real things an information
            system deals with, such as customers, suppliers, contracts, and rental agreements. Putting data and processes together in one place recognizes the fact that there are a limited number of operations for any given data structure, and the 
            object-oriented approach makes sense even though typical systems development keeps data and processes independent of each other. The goal of OOAD is to make systems elements more reusable, thus improving sys- tem quality and the productivity of systems analysis and design.
Another key idea behind object orientation is inheritance. Objects are orga- nized into object classes, which are 
groups of objects sharing structural and behav- ioral characteristics. Inheritance allows the creation of new classes that share some of the characteristics of existing classes. For example,
 from a class of objects called “per- son,” you can use inheritance to define another class of objects called “customer.” Objects of the class “customer” would share certain
  characteristics with objects of the class “person”: They would both have names, addresses, phone numbers, and so on. Because “person” is the more general class and “customer” is more specific, every customer is a person but not every person is a customer.
As you might expect, a computer programming language is 
required that can create and manipulate objects and classes of objects in order to create object-oriented information systems. Several object-oriented programming languages have been cre- ated (e.g., C++, Eiffel, and Java). In fact, object-oriented languages were developed</p>

<p>
Much of the criticism of the SDLC has been based on abuses of the life cycle per- spective, both real and imagined. One of the criticisms, one based in reality, is that reliance on the life-cycle approach forced intangible and dynamic processes, such as analysis and design, into timed phases that were doomed to fail (Martin, 1999). Developing software is not like building a bridge, and the same types of engineer- ing processes cannot always be applied (Fowler, 2003), even though viewing software development as a science rather than an art has no doubt resulted in vast improve- ments in the process and the resulting products. Another criticism with its basis in fact is that life cycle reliance has resulted in massive amounts of process and docu- mentation, much of which seems to exist for its own sake. Too much process and documentation does slow down development, hence the streamlining that underlies the Agile Methodologies and the admonition from Agile developers that source code is enough documentation. A criticism of the SDLC that is based more on fiction is that all versions of the SDLC are waterfall-like, with no feedback between steps. Another false criticism is that a life-cycle approach necessarily limits the involvement of users in the earliest stages of the process. Yet Agile Methodologies, and eXtreme Programming in particular, advocate an analysis–design–code–test sequence that is a cycle (Figure 1-8), and users can be and are involved in every step of this cycle; thus, cycles in and of themselves do not necessarily limit user involvement.
Whether the criticisms have been based on fact or not, however, it is true that the traditional SDLC waterfall approach has problems, and we applaud the changes taking place in the systems development community. These changes are allowing problems with traditional approaches to be fixed, and without a doubt the result is better software produced more expertly and more quickly.
However, despite the criticisms of a life-cycle approach to systems analysis and design, the view of systems analysis and design taking place in a cycle continues to be pervasive, and, we think, true as well. There are many types of cycles, from the water- fall to the analysis–design–code–test cycle, and they all capture the iterative nature of systems development. The waterfall approach may be losing its relevance, but the cycle in Figure 1-8 is gaining in popularity, and the analysis–design–code–test cycle is embed- ded in a larger organizational cycle. Although we typically use the terms systems analysis and design and systems development interchangeably, perhaps it is better to think about systems analysis and design as being the cycle in Figure 1-8 and systems development as being the larger cycle in Figure 1-2. The analysis–design–code–test cycle largely ignores the organizational planning that precedes it and the organizational installation and
</p>

<p>
Although you have most likely heard about outsourcing in terms of IT jobs from all over the world going to India, it turns out that the global outsourcing marketplace is much more complicated. According to a 2014 report by ATKearney (2014), India is the number one outsourcing nation, while China is close behind, and Malaysia is third. Despite much turmoil in the overall outsourcing market over the years, the top three rankings have not changed since ATKearney’s first report on outsourcing in 2003. Not all of the 2014 top 10 outsourcing countries are located in Asia. Although six are in Asia, two are in Latin America (Mexico and Brazil), one is in Europe (Bulgaria), and one is in Africa (Egypt). Even the United States is an outsourcing nation, number 14 on the ATKearney list. In fact, Indian outsourcing firms, such as Wipro, Infosys, and Tata Consulting, operate offices in the United States. As Indian firms have become so successful at offshoring, and as currencies have fluctuated, it has become more expensive for firms to contract with Indian companies, so many firms have started to look elsewhere. Many US firms have turned to what is called nearshoring, or contracting with companies in Latin American countries. Many of these countries are no more than one time zone away, and they maintain some of the labor cost advantages that are eroding in India (King, 2008a). Mexico is increasingly seen as a complement to India and other offshore locations and is listed as number four in the ATKearney 2014 list. It is also becoming more common for firms to dis- tribute their outsourcing work across vendors in several countries at the same time.
Analysts need to be aware of outsourcing as an alternative. When generating alternative system development strategies for a system, as an analyst you should con- sult organizations in your area that provide outsourcing services. It may well be that at least one such organization has already developed and is running an application very close to what your users are asking for. Perhaps outsourcing the replacement system should be one of your alternatives. Knowing what your system requirements are before you consider outsourcing means that you can carefully assess how well the suppliers of outsourcing services can respond to your needs. However, should you decide not to consider outsourcing, you need to determine whether some software components of your replacement system should be purchased and not built in-house.
</p>
      </section>
    </div>
  )
}

export default App
