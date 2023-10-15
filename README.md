# JoyPass
A data-driven concert ticket platform.

- What is the problem We are attempting to solve?
    - Scalpers are exploiting online ticket buying —> prices are marked up, general ticket buying experience deteriorates due to bots and inflated demand, artists no longer have control over their own concert prices.
- What are the current solutions to this problem?
    - TicketMaster - Verified Fan Tickets- advertising official ticket resale on their platform as a more reasonable and easier monitored alternative.
    - This doesn't mitigate the issue of reselling at exorbitant markups.
- What is our proposed solution/offering?
    - Streamlining the ticket-buying process through a guaranteed ticket system based on user’s listening data - easing access for fans to see their favorite artists live.
- How is your solution more efficient than the current state (or what is proprietary)?
    - VerifiedFan/VerifiedTickets is an unreliable defense against the epidemic of bots, and still perpetuates exclusionary resale culture - power dynamic still not in the hands of artists and fans
- How does one implement your solution (or what is the execution plan)
    - Simplistic web app as a vehicle for ticket distribution
        - Pulling listening data and top items per user via Spotify API
        - Display upcoming events, which fans can reserve, and listening data determines their spot in the ticket queue
            - no ambiguity in terms of chances of securing a ticket
