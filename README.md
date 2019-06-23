# RealEstateInvestorPortal
investor portal for YDLP
If the project goes open-source, we'll remove YDLP branding. 

Functionality:
registration and login. users would be matched internally based on TIN (stored as Hash)
users would be able to subscribe and unsubscribe from various mailing lists.
users would be able to see their current investments including name, amount invested, amounted returned to date, projected ROI
Users would have access to all signed docs and deal related docs
present data in summation form as well
I have identified pug as a good framework for these static templates.
each deal would have it's own page as well, with either links to or a full history of deal updates and narratives (separate pdf files typically issued once a quarter). 

Admin:
add new deal, including users in deal
view certain user details

possible integrations:
Pandadoc for document signing.
google maps/earth to identify location of investments
