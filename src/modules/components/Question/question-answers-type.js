import React, { Component } from "react";
import { Image, StyleSheet } from "react-native";

// import { AnswersDto } from "../../../proxy";
import {
  Container,
  Content,
  Textarea,
  Form,
  ListItem,
  CheckBox,
  Text,
  Picker,
  Body,
  Icon,
  List
} from "native-base";
import * as _ from "lodash";
import { TextInput } from "react-native-gesture-handler";
export default class QuestionAnswersType extends Component {
  constructor() {
    super();
    this.state = {
      selectedYes: false,
      selectedNo: false,
      selectedOption: undefined
    };
  }
  props: {
    question: any,
    getCurrentAnswer: () => void
  };

  onValueChange(value) {
    this.setState({
      selectedOption: value
    });
    this.props.getCurrentAnswer(value);
  }
  componentWillMount() {
    console.log("currentAnswer", this.props.currentAnswer);
  }
  render() {
    const dropDownChoices = [
      {
        questionId: 5,
        values: ["Service", "Product"]
      },
      {
        questionId: 6,
        values: [
          "Tech Enabled",
          "Ecommerce",
          "Marketplace",
          "Community",
          "Event"
        ]
      },
      {
        questionId: 18,
        values: [
          "2019",
          "2018",
          "2017",
          "2016",
          "2015",
          "2014",
          "2013",
          "2012",
          "2011",
          "2010",
          "2009",
          "2008",
          "2007",
          "2006",
          "2005",
          "2004",
          "2003",
          "2002",
          "2001",
          "2000",
          "1999",
          "1998",
          "1997",
          "1996",
          "1995",
          "1994",
          "1993",
          "1992",
          "1991",
          "1990",
          "1989",
          "1988",
          "1987",
          "1986",
          "1985"
        ]
      },
      {
        questionId: 17,
        values: [
          "Idea Phase (still on paper)",
          "Prototype Phase",
          "Starting Phase (1st year)",
          "Established Startup (1 to 3 years)",
          "Growth Stage (more than 3 years)"
        ]
      },
      {
        questionId: 20,
        values: ["Bootstrapping", "Seed", "Series A", "Series B"]
      },
      {
        questionId: 21,
        values: [
          "Direct Sales B2B",
          "Direct Sales B2C",
          "Franchise Model",
          "Subscription Model",
          "Freemium Model",
          "Trade Model",
          "Other"
        ]
      },
      {
        questionId: 22,
        values: ["Social", "Business", "Both"]
      },
      {
        questionId: 23,
        values: ["Consumption", "Production"]
      },
      {
        questionId: 24,
        values: ["1-2", "3-5", "6-10", "11-20", "21-50", "51-100", "100+"]
      },
      {
        questionId: 25,
        values: ["1-2", "3-5", "6-10", "10+"]
      },
      {
        questionId: 27,
        values: ["1-2", "3-5", "6-10", "10+"]
      },
      {
        questionId: 38,
        values: [
          "Alexandria",
          "Aswan",
          "Asyut",
          "Beheira",
          "Beni Suef",
          "Cairo",
          "Dakahlia",
          "Damietta",
          "Faiyum",
          "Gharbia",
          "Giza",
          "Ismailia",
          "Kafr El Sheikh",
          "Luxor",
          "Matruh",
          "Minya",
          "Monufia",
          "New Valley",
          "North Sinai",
          "Port Said",
          "Qalyubia",
          "Qena",
          "Red Sea",
          "Sharqia",
          "Sohag",
          "South Sinai",
          "Suez"
        ]
      },
      {
        questionId: 72,
        values: [
          "Alexandria",
          "Aswan",
          "Asyut",
          "Beheira",
          "Beni Suef",
          "Cairo",
          "Dakahlia",
          "Damietta",
          "Faiyum",
          "Gharbia",
          "Giza",
          "Ismailia",
          "Kafr El Sheikh",
          "Luxor",
          "Matruh",
          "Minya",
          "Monufia",
          "New Valley",
          "North Sinai",
          "Port Said",
          "Qalyubia",
          "Qena",
          "Red Sea",
          "Sharqia",
          "Sohag",
          "South Sinai",
          "Suez"
        ]
      },
      {
        questionId: 39,
        values: [
          "Alexandria",
          "Aswan",
          "Asyut",
          "Beheira",
          "Beni Suef",
          "Cairo",
          "Dakahlia",
          "Damietta",
          "Faiyum",
          "Gharbia",
          "Giza",
          "Ismailia",
          "Kafr El Sheikh",
          "Luxor",
          "Matruh",
          "Minya",
          "Monufia",
          "New Valley",
          "North Sinai",
          "Port Said",
          "Qalyubia",
          "Qena",
          "Red Sea",
          "Sharqia",
          "Sohag",
          "South Sinai",
          "Suez"
        ]
      },
      {
        questionId: 31,
        values: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua & Barbuda",
          "Argentina",
          "Armenia",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia & Herzegovina",
          "Botswana",
          "Brazil",
          "Brunei Darussalam",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central African Republic",
          "Chad",
          "Chile",
          "China",
          "China - Hong Kong / Macau",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo, Democratic Republic of (DRC)",
          "Costa Rica",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Fiji",
          "Finland",
          "France",
          "French Guiana",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Great Britain",
          "Greece",
          "Grenada",
          "Guadeloupe",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Palestin",
          "Italy",
          "Ivory Coast (Cote d'Ivoire)",
          "Jamaica",
          "Japan",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Korea, Democratic Republic of (North Korea)",
          "Korea, Republic of (South Korea)",
          "Kosovo",
          "Kuwait",
          "Kyrgyz Republic (Kyrgyzstan)",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Martinique",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Mexico",
          "Moldova, Republic of",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar/Burma",
          "Namibia",
          "Nepal",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "North Macedonia, Republic of",
          "Norway",
          "Oman",
          "Pacific Islands",
          "Pakistan",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russian Federation",
          "Rwanda",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Vincent and the Grenadines",
          "Samoa",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovak Republic (Slovakia)",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Netherlands",
          "Timor Leste",
          "Togo",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks & Caicos Islands",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United States of America (USA)",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (UK)",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe"
        ]
      },
      {
        questionId: 71,
        values: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua & Barbuda",
          "Argentina",
          "Armenia",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia & Herzegovina",
          "Botswana",
          "Brazil",
          "Brunei Darussalam",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central African Republic",
          "Chad",
          "Chile",
          "China",
          "China - Hong Kong / Macau",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo, Democratic Republic of (DRC)",
          "Costa Rica",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Fiji",
          "Finland",
          "France",
          "French Guiana",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Great Britain",
          "Greece",
          "Grenada",
          "Guadeloupe",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Palestin",
          "Italy",
          "Ivory Coast (Cote d'Ivoire)",
          "Jamaica",
          "Japan",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Korea, Democratic Republic of (North Korea)",
          "Korea, Republic of (South Korea)",
          "Kosovo",
          "Kuwait",
          "Kyrgyz Republic (Kyrgyzstan)",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Martinique",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Mexico",
          "Moldova, Republic of",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar/Burma",
          "Namibia",
          "Nepal",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "North Macedonia, Republic of",
          "Norway",
          "Oman",
          "Pacific Islands",
          "Pakistan",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russian Federation",
          "Rwanda",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Vincent and the Grenadines",
          "Samoa",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovak Republic (Slovakia)",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Netherlands",
          "Timor Leste",
          "Togo",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks & Caicos Islands",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United States of America (USA)",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (UK)",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe"
        ]
      },
      {
        questionId: 40,
        values: [
          "Afghanistan",
          "Albania",
          "Algeria",
          "Andorra",
          "Angola",
          "Anguilla",
          "Antigua & Barbuda",
          "Argentina",
          "Armenia",
          "Australia",
          "Austria",
          "Azerbaijan",
          "Bahamas",
          "Bahrain",
          "Bangladesh",
          "Barbados",
          "Belarus",
          "Belgium",
          "Belize",
          "Benin",
          "Bermuda",
          "Bhutan",
          "Bolivia",
          "Bosnia & Herzegovina",
          "Botswana",
          "Brazil",
          "Brunei Darussalam",
          "Bulgaria",
          "Burkina Faso",
          "Burundi",
          "Cambodia",
          "Cameroon",
          "Canada",
          "Cape Verde",
          "Cayman Islands",
          "Central African Republic",
          "Chad",
          "Chile",
          "China",
          "China - Hong Kong / Macau",
          "Colombia",
          "Comoros",
          "Congo",
          "Congo, Democratic Republic of (DRC)",
          "Costa Rica",
          "Croatia",
          "Cuba",
          "Cyprus",
          "Czech Republic",
          "Denmark",
          "Djibouti",
          "Dominica",
          "Dominican Republic",
          "Ecuador",
          "Egypt",
          "El Salvador",
          "Equatorial Guinea",
          "Eritrea",
          "Estonia",
          "Ethiopia",
          "Fiji",
          "Finland",
          "France",
          "French Guiana",
          "Gabon",
          "Gambia",
          "Georgia",
          "Germany",
          "Ghana",
          "Great Britain",
          "Greece",
          "Grenada",
          "Guadeloupe",
          "Guatemala",
          "Guinea",
          "Guinea-Bissau",
          "Guyana",
          "Haiti",
          "Honduras",
          "Hungary",
          "Iceland",
          "India",
          "Indonesia",
          "Iran",
          "Iraq",
          "Palestin",
          "Italy",
          "Ivory Coast (Cote d'Ivoire)",
          "Jamaica",
          "Japan",
          "Jordan",
          "Kazakhstan",
          "Kenya",
          "Korea, Democratic Republic of (North Korea)",
          "Korea, Republic of (South Korea)",
          "Kosovo",
          "Kuwait",
          "Kyrgyz Republic (Kyrgyzstan)",
          "Laos",
          "Latvia",
          "Lebanon",
          "Lesotho",
          "Liberia",
          "Libya",
          "Liechtenstein",
          "Lithuania",
          "Luxembourg",
          "Madagascar",
          "Malawi",
          "Malaysia",
          "Maldives",
          "Mali",
          "Malta",
          "Martinique",
          "Mauritania",
          "Mauritius",
          "Mayotte",
          "Mexico",
          "Moldova, Republic of",
          "Monaco",
          "Mongolia",
          "Montenegro",
          "Montserrat",
          "Morocco",
          "Mozambique",
          "Myanmar/Burma",
          "Namibia",
          "Nepal",
          "New Zealand",
          "Nicaragua",
          "Niger",
          "Nigeria",
          "North Macedonia, Republic of",
          "Norway",
          "Oman",
          "Pacific Islands",
          "Pakistan",
          "Panama",
          "Papua New Guinea",
          "Paraguay",
          "Peru",
          "Philippines",
          "Poland",
          "Portugal",
          "Puerto Rico",
          "Qatar",
          "Reunion",
          "Romania",
          "Russian Federation",
          "Rwanda",
          "Saint Kitts and Nevis",
          "Saint Lucia",
          "Saint Vincent and the Grenadines",
          "Samoa",
          "Sao Tome and Principe",
          "Saudi Arabia",
          "Senegal",
          "Serbia",
          "Seychelles",
          "Sierra Leone",
          "Singapore",
          "Slovak Republic (Slovakia)",
          "Slovenia",
          "Solomon Islands",
          "Somalia",
          "South Africa",
          "South Sudan",
          "Spain",
          "Sri Lanka",
          "Sudan",
          "Suriname",
          "Swaziland",
          "Sweden",
          "Switzerland",
          "Syria",
          "Tajikistan",
          "Tanzania",
          "Thailand",
          "Netherlands",
          "Timor Leste",
          "Togo",
          "Trinidad & Tobago",
          "Tunisia",
          "Turkey",
          "Turkmenistan",
          "Turks & Caicos Islands",
          "Uganda",
          "Ukraine",
          "United Arab Emirates",
          "United States of America (USA)",
          "Uruguay",
          "Uzbekistan",
          "Venezuela",
          "Vietnam",
          "Virgin Islands (UK)",
          "Virgin Islands (US)",
          "Yemen",
          "Zambia",
          "Zimbabwe"
        ]
      },
      {
        questionId: 41,
        values: ["18-20", "21-25", "26-30", "31-35", "36-40", "41-45", "46+"]
      },
      {
        questionId: 42,
        values: ["Male", "Female"]
      },
      {
        questionId: 48,
        values: [
          "Student",
          "Founder",
          "Cofounder",
          "Employee",
          "Leader in corporate",
          "Freelancer",
          "Ecosystem Support Service"
        ]
      },
      { questionId: 49, values: ["Part Time", "Full Time"] },
      {
        questionId: 53,
        values: [
          "The Champion – ENFP Personality",
          "The Commander – ENTJ Personality",
          "The Composer – ISFP Personality",
          "The Counselor – INFJ Personality",
          "The Craftsman – ISTP Personality",
          "The Doer – ESTP Personality",
          "The Giver – ENFJ Personality",
          "The Idealist – INFP Personality",
          "The Inspector – ISTJ Personality",
          "The Mastermind – INTJ Personality",
          "The Nurturer – ISFJ Personality",
          "The Performer – ESFP Personality",
          "The Provider – ESFJ Personality",
          "The Supervisor – ESTJ Personality",
          "The Thinker – INTP Personality",
          "The Visionary – ENTP Personality"
        ]
      },
      { questionId: 65, values: ["Engaged", "Married", "Parent", "Other"] },
      { questionId: 66, values: ["In Egypt", "Out Egypt"] },
      {
        questionId: 75,
        values: [
          "Getting a scholarship",
          "IP / copywriting",
          "Setting cofounder agreements"
        ]
      },
      {
        questionId: 77,
        values: ["WhatsApp", "Email", "Facebook"]
      },
      {
        questionId: 16,
        values: [
          "Accounting",
          "Airlines/Aviation",
          "Alternative Dispute Resolution",
          "Alternative Medicine",
          "Animation",
          "Apparel & Fashion",
          "Architecture & Planning",
          "Arts & Crafts",
          "Automotive",
          "Aviation & Aerospace",
          "Banking",
          "Biotechnology",
          "Broadcast Media",
          "Building Materials",
          "Business Supplies & Equipment",
          "Capital Markets",
          "Chemicals",
          "Civic & Social Organization",
          "Civil Engineering",
          "Commercial Real Estate",
          "Computer & Network Security",
          "Computer Games",
          "Computer Hardware",
          "Computer Networking",
          "Computer Software",
          "Construction",
          "Consumer Electronics",
          "Consumer Goods",
          "Consumer Services",
          "Cosmetics",
          "Dairy",
          "Defense & Space",
          "Design",
          "Education Management",
          "E-learning",
          "Electrical & Electronic Manufacturing",
          "Entertainment",
          "Environmental Services",
          "Events Services",
          "Executive Office",
          "Facilities Services",
          "Farming",
          "Financial Services",
          "Fine Art",
          "Fishery",
          "Food & Beverages",
          "Food Production",
          "Fundraising",
          "Furniture",
          "Gambling & Casinos",
          "Glass, Ceramics & Concrete",
          "Government Administration",
          "Government Relations",
          "Graphic Design",
          "Health, Wellness & Fitness",
          "Higher Education",
          "Hospital & Health Care",
          "Hospitality",
          "Human Resources",
          "Import & Export",
          "Individual & Family Services",
          "Industrial Automation",
          "Information Services",
          "Information Technology & Services",
          "Insurance",
          "International Affairs",
          "International Trade & Development",
          "Internet",
          "Investment Banking/Venture",
          "Investment Management",
          "Judiciary",
          "Law Enforcement",
          "Law Practice",
          "Legal Services",
          "Legislative Office",
          "Leisure & Travel",
          "Libraries",
          "Logistics & Supply Chain",
          "Luxury Goods & Jewelry",
          "Machinery",
          "Management Consulting",
          "Maritime",
          "Marketing & Advertising",
          "Market Research",
          "Mechanical or Industrial Engineering",
          "Media Production",
          "Medical Device",
          "Medical Practice",
          "Mental Health Care",
          "Military",
          "Mining & Metals",
          "Motion Pictures & Film",
          "Museums & Institutions",
          "Music",
          "Nanotechnology",
          "Newspapers",
          "Nonprofit Organization Management",
          "Oil & Energy",
          "Online Publishing",
          "Outsourcing/Offshoring",
          "Package/Freight Delivery",
          "Packaging & Containers",
          "Paper & Forest Products",
          "Performing Arts",
          "Pharmaceuticals",
          "Philanthropy",
          "Photography",
          "Plastics",
          "Political Organization",
          "Primary/Secondary Education",
          "Printing",
          "Professional Training",
          "Program Development",
          "Public Policy",
          "Public Relations",
          "Public Safety",
          "Publishing",
          "Railroad Manufacture",
          "Ranching",
          "Real Estate",
          "Recreational",
          "Facilities & Services",
          "Religious Institutions",
          "Renewables & Environment",
          "Research",
          "Restaurants",
          "Retail",
          "Security & Investigations",
          "Semiconductors",
          "Shipbuilding",
          "Sporting Goods",
          "Sports",
          "Staffing & Recruiting",
          "Supermarkets",
          "Telecommunications",
          "Textiles",
          "Think Tanks",
          "Tobacco",
          "Translation & Localization",
          "Transportation/Trucking/Railroad",
          "Utilities",
          "Venture Capital",
          "Veterinary",
          "Warehousing",
          "Wholesale",
          "Wine & Spirits",
          "Wireless",
          "Writing & Editing"
        ]
      }
    ];
    switch (this.props.question.QuestionType) {
      case 0: {
        return (
          <Form>
            <Picker
              note
              mode="dropdown"
              style={{ width: 120 }}
              // selectedValue={this.state.selected}
              // onValueChange={this.onValueChange.bind(this)}
            ></Picker>
          </Form>
        );
      }
      case 1: {
        let options = dropDownChoices.filter(
          s => s.questionId == this.props.question.Id
        );
        console.log("Optionsssssssssdfsdfdsfsdfsdfsdfsdfsd", options[0].values);
        return (
          <Form>
            <Picker
              style={{ alignSelf: "center" }}
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your Answer"
              textStyle={{ color: "#ef9c05" }}
              itemStyle={{
                marginLeft: 0,
                paddingLeft: 10
              }}
              itemTextStyle={{ color: "#ef9c05" }}
              style={{ width: undefined }}
              selectedValue={this.state.selectedOption}
              onValueChange={this.onValueChange.bind(this)}
            >
              {options[0].values.map((item, index) => {
                return <Picker.Item label={item} key={index} value={item} />;
              })}
            </Picker>
          </Form>
        );
      }
      case 2: {
        const oldValue = this.props.currentAnswer
          ? this.props.currentAnswer
          : "";
        return (
          <Textarea
            defaultValue={oldValue}
            style={{
              width: 300,
              borderColor: "black",
              alignSelf: "center",
              marginTop: 20
            }}
            rowSpan={7}
            bordered
            placeholder="Your Answer"
            onChangeText={txt => {
              var answer = txt;
              this.props.getCurrentAnswer(answer);
            }}
          />
        );
      }

      case 3: {
        return (
          <List>
            <ListItem style={{ marginTop: 20 }}>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedYes}
                onPress={() => {
                  this.setState({ selectedYes: true, selectedNo: false });
                  this.props.getCurrentAnswer("Yes");
                }}
              />
              <Text>Yes</Text>
            </ListItem>
            <ListItem>
              <CheckBox
                style={{ borderRadius: -3 }}
                color="#ef9c05"
                checked={this.state.selectedNo}
                onPress={() => {
                  this.setState({ selectedNo: true, selectedYes: false });
                  this.props.getCurrentAnswer("No");
                }}
              />
              <Text>No</Text>
            </ListItem>
          </List>
        );
      }

      case 3: {
        return <Container />;
      }
      default:
        return <Container />;
    }
  }
}

// export default QuestionAnswersType = ({ question, getCurrentAnswer }) => {
//   switch (question.QuestionType) {
//     case 0: {
//       return (
//         <Container>
//           <Content>
//             <Form>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 120 }}
//                 selectedValue={this.state.selected}
//                 onValueChange={this.onValueChange.bind(this)}
//               >
//                 <Picker.Item label="Wallet" value="key0" />
//                 <Picker.Item label="ATM Card" value="key1" />
//                 <Picker.Item label="Debit Card" value="key2" />
//                 <Picker.Item label="Credit Card" value="key3" />
//                 <Picker.Item label="Net Banking" value="key4" />
//               </Picker>
//             </Form>
//           </Content>
//         </Container>
//       );
//     }
//     case 1: {
//       return (
//         <Container>
//           <Content>
//             <Form>
//               <Picker
//                 note
//                 mode="dropdown"
//                 style={{ width: 120 }}
//                 // selectedValue={this.state.selected}
//                 // onValueChange={this.onValueChange.bind(this)}
//               >
//                 <Picker.Item label="Wallet" value="key0" />
//                 <Picker.Item label="ATM Card" value="key1" />
//                 <Picker.Item label="Debit Card" value="key2" />
//                 <Picker.Item label="Credit Card" value="key3" />
//                 <Picker.Item label="Net Banking" value="key4" />
//               </Picker>
//             </Form>
//           </Content>
//         </Container>
//       );
//     }
//     case 2: {
//       return (
//         <Container>
//           <Content padder>
//             <Textarea
//               style={{ width: 200 }}
//               rowSpan={5}
//               bordered
//               placeholder="Textarea"
//               onChangeText={txt => {
//                 var answer = txt;
//                 getCurrentAnswer(answer);
//               }}
//             />
//           </Content>
//         </Container>
//       );
//     }

//     case 3: {
//       return (
//         <Content>
//           <ListItem>
//             <CheckBox
//               checked={selectedYes}
//               onPress={() => {
//                 getCurrentAnswer("Yes");
//               }}
//             />
//             <Text>Yes</Text>
//           </ListItem>
//           <ListItem>
//             <CheckBox
//               checked={selectedNo}
//               onPress={() => {
//                 getCurrentAnswer("No");
//               }}
//             />
//             <Text>No</Text>
//           </ListItem>
//         </Content>
//       );
//     }

//     case 3: {
//       return <Container />;
//     }
//     default:
//       return <Container />;
//   }
// };
