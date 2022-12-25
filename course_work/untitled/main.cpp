#include <iostream>
#include <vector>
#include <fstream>
#include <algorithm>
#include <random>
#include <boost/date_time/posix_time/posix_time.hpp>

std::vector<std::string> split (const std::string& s, const std::string& delimiter) {
    size_t pos_start = 0, pos_end, delim_len = delimiter.length();
    std::string token;
    std::vector<std::string> res;

    while ((pos_end = s.find (delimiter, pos_start)) != std::string::npos) {
        token = s.substr (pos_start, pos_end - pos_start);
        pos_start = pos_end + delim_len;
        res.push_back (token);
    }

    res.push_back (s.substr (pos_start));
    return res;
}
struct Country {
	Country()=default;
	Country(int id, const std::string& name, const std::string& shortName) : Id{id}, Name{name}, ShortName{shortName} {}
	int Id = 0;
	std::string Name = "";
	std::string ShortName = "";
};
struct City {
	City()=default;
	City(int id, const std::string& name, const std::string& countryName) : Id{id}, Name{name}, CountryName{countryName} {}
	int Id = 0;
	std::string Name = "";
	std::string CountryName = "";
};
struct EditedCity {
	EditedCity()=default;
	EditedCity(int id, const std::string& name, int countryId) : Id{id}, Name{name}, CountryId{countryId} {}
	int Id = 0;
	std::string Name = "";
	int CountryId = 0;
};
struct RawStadium {
	RawStadium()=default;
	RawStadium(int id, const std::string& name, const std::string& cityName) : Id{id}, Name{name}, CityName{cityName} {}
	int Id = 0;
	std::string Name = "";
	std::string CityName = "";
};
struct Stadium {
	Stadium()=default;
	Stadium(int id, const std::string& name, int cityId) : Id{id}, Name{name}, CityId{cityId} {}
	int Id = 0;
	std::string Name = "";
	int CityId = 0;
};
struct RawTeam {
	RawTeam()=default;
	RawTeam(int id, const std::string& name, const std::string& countryName): Id{id}, Name{name}, CountryName{countryName} {}
	int Id = 0;
	std::string Name = "";
	std::string CountryName = "";
};

struct Team {
	Team()=default;
	Team(int id, const std::string& name, int countryId): Id{id}, Name{name}, CountryId{countryId} {}
	int Id = 0;
	std::string Name = "";
	int CountryId = 0;
};

struct Player {
	Player()=default;
	Player(int id, int teamId, const std::string& name, int playerRoleId, int age, bool isSubstitute)
		: Id{id}, TeamId{teamId}, Name{name}, PlayerRoleId{playerRoleId}, Age{age}, IsSubstitute{isSubstitute} {}
	int Id = 0;
	int TeamId = 0;
	std::string Name = "";
	int PlayerRoleId = 0;
	int Age = 0;
	bool IsSubstitute = false;
};

struct Referee {
	Referee()=default;
	Referee(int id, const std::string& name, int countryId) : Id{id}, Name{name}, CountryId{countryId} {}
	int Id = 0;
	std::string Name = "";
	int CountryId = 0;
};

struct Match {

};


std::vector<Country> GetCountries() {
	auto countryFile = std::ifstream("country.csv");
	auto countries = std::vector<Country>();
	auto str = std::string();
	while(getline(countryFile, str)) {
		auto row = split(str, ",");
		countries.emplace_back(atoi(row[0].c_str()),row[2], row[1]);
	}
	return countries;
}
void createCity() {
	auto countries = GetCountries();
	auto cityFile = std::ifstream("city.csv");
	auto editedCityFile = std::ofstream("editedCity.csv");
	auto cities = std::vector<City>();
	auto editedCities = std::vector<EditedCity>();
	auto str = std::string();

	while(getline(cityFile, str)) {
		auto row = split(str, ",");
		cities.emplace_back(atoi(row[0].c_str()), row[1], row[2]);
	}
	
	for(auto& city : cities) {
		auto countryId = std::find_if(countries.begin(), countries.end(), [city](const Country& c) { return c.Name==city.CountryName; })->Id;
		editedCities.emplace_back(city.Id, city.Name, countryId);
	}
	for(auto& ec : editedCities) {
		editedCityFile<<ec.Id<<","<<ec.Name<<","<<ec.CountryId<<"\n";
	}
}
void createStadiums() {
	auto editedCityFile = std::ifstream("editedCity.csv");
	auto rawStadiumFile = std::ifstream("rawStadium.csv");
	auto stadiumFile = std::ofstream("stadium.csv");
	
	auto editedCities = std::vector<EditedCity>();
	auto rawStadiums = std::vector<RawStadium>();
	auto stadiums = std::vector<Stadium>();
	auto str = std::string();
	
	while(getline(editedCityFile, str)) {
		auto row = split(str, ",");
		editedCities.emplace_back(atoi(row[0].c_str()), row[1], atoi(row[2].c_str()));
	}
	
	while(getline(rawStadiumFile, str)) {
		auto row = split(str, ",");
		rawStadiums.emplace_back(atoi(row[0].c_str()), row[1], row[2]);
	}
	
	for(auto& s : rawStadiums) {
		auto cityId = std::find_if(editedCities.begin(), editedCities.end(), [s](const EditedCity& c) { return s.CityName==c.Name; })->Id;
		stadiums.emplace_back(s.Id, s.Name, cityId);
	}
	
	for(auto& s : stadiums) {
		stadiumFile<<s.Id<<","<<s.Name<<","<<s.CityId<<"\n";
	}
}
void createTeam() {
	auto countries = GetCountries();
	auto rawTeamFile = std::ifstream("rawTeam.csv");
	auto teamFile = std::ofstream("team.csv");
	auto rawTeams = std::vector<RawTeam>();
	auto teams = std::vector<Team>();
	auto str = std::string();
	while(getline(rawTeamFile, str)) {
		auto row = split(str, ",");
		rawTeams.emplace_back(atoi(row[0].c_str()), row[1], row[2]);
	}
	for(auto& t : rawTeams) {
		auto countryId = std::find_if(countries.begin(), countries.end(), [t](const Country& c) { return t.CountryName==c.Name; })->Id;
		teamFile<<t.Id<<","<<t.Name<<","<<countryId<<"\n";
	}
	
}
void createPlayers() {
	auto teamFile = std::ifstream("team.csv");
	auto playerFile = std::ofstream("players.csv");
	auto nsFile = std::ifstream("ns.txt");
	auto players = std::vector<Player>();
	auto teams = std::vector<Team>();
	auto str = std::string();
	while(getline(teamFile, str)) {
		auto row = split(str, ",");
		teams.emplace_back(atoi(row[0].c_str()), row[1], atoi(row[2].c_str()));
	}
	auto ns = std::vector<std::string>();
	while(getline(nsFile, str)) {
		ns.emplace_back(str);
	}
	srand(time(NULL));
	auto i = 0;
	
	for(auto& t : teams) {
		auto activePlayers = 6 + rand() % 5;
		players.emplace_back(i, t.Id, ns[i], 1, 21 + rand() % 12, false);
		++i;
		auto positions = std::vector<int>();
		for(auto j=0;j<activePlayers;++j) {
			auto pos = 2 + rand() % 10;
			while(std::find(positions.begin(), positions.end(), pos)!=positions.end()) {
				pos = 2 + rand() % 10;
			}
			positions.emplace_back(pos);
			players.emplace_back(i, t.Id, ns[i], pos, 21 + rand() % 12, false);
			++i;
		}
		auto substitutePlayers = rand() % 8;
		for(auto j=0;j<substitutePlayers;++j) {
			players.emplace_back(i, t.Id, ns[i], 1 + rand() % 11, 21 + rand() % 12, true);
			++i;
		}
	}
	for(auto& p : players) {
		std::string tf = p.IsSubstitute?"true":"false";
		playerFile<<p.Id<<","<<p.TeamId<<","<<p.Name<<","<<p.PlayerRoleId<<","<<p.Age<<","<<tf<<"\n";
	}
}
void createReferee() {
	auto countries = std::vector<Country>();
	auto nssVec = std::vector<std::string>();
	auto countryFile = std::ifstream("country.csv");
	auto nss = std::ifstream("nss.txt");
	auto refereeFile = std::ofstream("referee.csv");
	auto str = std::string();
	while(getline(nss, str)) {
		nssVec.emplace_back(str);
	}
	while(getline(countryFile, str)) {
		auto row = split(str, ",");
		countries.emplace_back(atoi(row[0].c_str()), row[2], row[1]);
	}
	auto countriesSize = countries.size() - 3;
	for(auto i=1;i<3000;++i) {
		refereeFile<<i<<","<<nssVec[i]<<","<<1 + rand() % countriesSize<<"\n";
	}
}

boost::posix_time::ptime GenerateRandomDateInRange(boost::posix_time::time_duration duration, boost::posix_time::ptime startPoint) {
	auto rng = std::mt19937 { std::random_device{}() };
	return startPoint + boost::posix_time::seconds(std::uniform_int_distribution<unsigned>(0, duration.total_seconds())(rng));
}

std::string NormalizeNumber(const std::string& str) {
	return (str.size()<2)?"0"+str:str;
}

unsigned RNG(int start, int end) {
	auto rng = std::mt19937(std::random_device{}());
	return std::uniform_int_distribution<unsigned>(start, end)(rng);
}

void createMatches() {
//id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
//	stage varchar(1) check (stage IN ('Q', 'S', 'F')),
//	first_time_start timestamp,
//	first_time_end timestamp,
//	second_time_start timestamp,
//	second_time_end timestamp,
//	is_extra_time bool,
//	extra_time_start timestamp,
//	extra_time_end timestamp,
//	stadium_id SERIAL,
//	first_team_id SERIAL,
//	second_team_id SERIAL,
//	referee_id SERIAL,
//	first_assistant_id SERIAL,
//	second_assistant_id SERIAL

	auto stadiumFile = std::ifstream("stadium.csv");
	auto refereeFile = std::ifstream("referee.csv");
	auto teamFile = std::ifstream("team.csv");
	auto matchFile = std::ofstream("match.csv");
	
	auto referees = std::vector<Referee>();
	auto stadiums = std::vector<Stadium>();
	auto teams = std::vector<Team>();
	
	auto str = std::string();
	
	while(getline(stadiumFile, str)) {
		auto row = split(str, ",");
		stadiums.emplace_back(atoi(row[0].c_str()), row[1], atoi(row[2].c_str()));
	}
	
	while(getline(refereeFile, str)) {
		auto row = split(str, ",");
		referees.emplace_back(atoi(row[0].c_str()), row[1], atoi(row[2].c_str()));
	}
	
	while(getline(teamFile, str)) {
		auto row = split(str, ",");
		teams.emplace_back(atoi(row[0].c_str()), row[1], atoi(row[2].c_str()));
	}
	
	
	auto ss = std::vector<std::string>{"Q", "S", "F"};
	
	for(auto i=1;i<100000;++i) {
		
		auto firstTimeStart = GenerateRandomDateInRange(
			boost::posix_time::hours(365*10*24),
			boost::posix_time::time_from_string("2010-01-01 00:00:00")
		);
	
		auto firstTimeEnd = firstTimeStart + boost::posix_time::minutes(45);
		auto secondTimeStart = firstTimeEnd + boost::posix_time::minutes(15);
		auto secondTimeEnd = secondTimeStart + boost::posix_time::minutes(45);
		auto extraTimeStart = secondTimeEnd + boost::posix_time::minutes(15);
		auto extraTimeEnd = extraTimeStart + boost::posix_time::minutes(30);
	
		matchFile<<i<<",";
		matchFile<<ss[RNG(0, 2)]<<",";
		
		matchFile<<to_sql_string(firstTimeStart.date());
		matchFile<<" ";
		matchFile<<firstTimeStart.time_of_day();
		matchFile<<",";
		
		matchFile<<to_sql_string(firstTimeEnd.date());
		matchFile<<" ";
		matchFile<<firstTimeEnd.time_of_day();
		matchFile<<",";
		
		matchFile<<to_sql_string(secondTimeStart.date());
		matchFile<<" ";
		matchFile<<secondTimeStart.time_of_day();
		matchFile<<",";
		
		matchFile<<to_sql_string(secondTimeEnd.date());
		matchFile<<" ";
		matchFile<<secondTimeEnd.time_of_day();
		matchFile<<",";
		
		std::string res = (RNG(0, 1))?"true":"false";
		matchFile<<res;
		matchFile<<",";
		
		matchFile<<to_sql_string(extraTimeStart.date());
		matchFile<<" ";
		matchFile<<extraTimeStart.time_of_day();
		matchFile<<",";
		
		matchFile<<to_sql_string(extraTimeEnd.date());
		matchFile<<" ";
		matchFile<<extraTimeEnd.time_of_day();
		matchFile<<",";
		
		auto stadium = stadiums[RNG(0, stadiums.size()-1)];
		matchFile<<stadium.Id<<",";
		auto firstTeam = teams[RNG(0, teams.size()-1)];
		auto secondTeam = teams[RNG(0, teams.size()-1)];
		while(firstTeam.Id==secondTeam.Id) {
			secondTeam = teams[RNG(0, teams.size()-1)];
		}
		matchFile<<firstTeam.Id<<",";
		matchFile<<secondTeam.Id<<",";
		
		auto refr = referees[RNG(0, referees.size()-1)];
		auto as1 = referees[RNG(0, referees.size()-1)];
		auto as2 = referees[RNG(0, referees.size()-1)];
		while(refr.Id==as1.Id) {
			as1 = referees[RNG(0, referees.size()-1)];
		}
		while(refr.Id==as2.Id or as1.Id==as2.Id) {
			as2 = referees[RNG(0, referees.size()-1)];
		}
		matchFile<<refr.Id<<",";
		matchFile<<as1.Id<<",";
		matchFile<<as2.Id<<"\n";
	}
	
	
	
}

std::string GenerateReason(int length) {
	auto str = std::string();
	for(auto i=0;i<length;++i) {
		str = str + char(RNG(98, 121));
	}
	return str;
}

void createAction() {
//CREATE TABLE IF NOT EXISTS action (
//	id INT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
//	action_time timestamp,
//	reason VARCHAR(40),
//	action_type_id SERIAL,
//	player_id SERIAL,
//	match_id SERIAL,
//);

	auto matches = std::vector<std::tuple<int, std::string, bool, int, int>>();
	auto teams = std::vector<int>();
	auto players = std::vector<std::pair<int, int>>();
	
	auto matchFile = std::ifstream("match.csv");
	auto teamFile = std::ifstream("team.csv");
	auto playerFile = std::ifstream("players.csv");
	auto actionFile = std::ofstream("action.csv");
	
	auto str = std::string();
	
	while(getline(matchFile, str)) {
		auto row = split(str, ",");
		matches.emplace_back(
			atoi(row[0].c_str()),
			row[2],
			row[6]=="true",
			atoi(row[10].c_str()),
			atoi(row[11].c_str())
		);
	}
	while(getline(teamFile, str)) {
		auto row = split(str, ",");
		teams.emplace_back(atoi(row[0].c_str()));
	}
	while(getline(playerFile, str)) {
		auto row = split(str, ",");
		players.emplace_back(atoi(row[0].c_str()), atoi(row[1].c_str()));
	}
	int id = 1;
	for(auto& m : matches) {
		auto [mid, time, isExtra, t1, t2] = m;
		auto curplayers = std::vector<int>();
		for(auto& p : players) {
			if(p.second==t1 or p.second==t2) {
				curplayers.emplace_back(p.first);
			}
		}
		auto first = boost::posix_time::time_from_string(time);
		auto second = first + boost::posix_time::hours(1);
		auto extra = second + boost::posix_time::hours(1);
		
		auto num = RNG(6, 11);
		
		auto yellowCounter = 0;
		for(auto i=0;i<num;++i) {
			auto stype = RNG(1, 6);
			if(stype==1 || stype==2) {
				yellowCounter++;
			}
			if(yellowCounter>1) {
				continue;
			}
			
			auto rOne = GenerateRandomDateInRange(boost::posix_time::minutes(45), first);
			auto rTwo = GenerateRandomDateInRange(boost::posix_time::minutes(45), second);
			auto rExtra = GenerateRandomDateInRange(boost::posix_time::minutes(30), extra);
			
			auto vec = std::vector<boost::posix_time::ptime>{rOne, rTwo};
			if(isExtra) vec.emplace_back(rExtra);
			
			auto t = vec[RNG(0, vec.size()-1)];
			
			actionFile<<id<<",";
			actionFile<<to_sql_string(t.date())<<" ";
			actionFile<<t.time_of_day()<<",";
			actionFile<<GenerateReason(RNG(10, 37))<<",";
			
			auto pla = curplayers[RNG(0, curplayers.size()-1)];
			
			actionFile<<stype<<",";
			actionFile<<pla<<",";
			actionFile<<mid<<"\n";
			id++;
		}
	}
}

int main() {
//	auto date_selector = [&](boost::posix_time::time_duration window = boost::posix_time::hours(24*10), ptime now = boost::posix_time::second_clock::local_time()) {
//        auto start = now - window;
//        unsigned size = (now - start).total_seconds();
//        return [=]() mutable {
//            return start + seconds(std::uniform_int_distribution<unsigned>(0,size)(rng));
//        };
//    };
//    auto seven_days = date_selector(boost::posix_time::hours(7*24), boost::posix_time::ptime());
//    std::cout << "seven_days:\n";
//    for (auto i = 10; i; --i) std::cout << "\t" << seven_days() << "\n";
//
//    auto ten_minutes = date_selector(boost::posix_time::minutes(10));
//    std::cout << "ten_minutes:\n";
//    for (auto i = 10; i; --i) std::cout << "\t" << ten_minutes() << "\n";

//	std::string ts("2000-01-01 00:00:00");
//	auto date = GenerateRandomDateInRange(boost::posix_time::minutes(45), boost::posix_time::time_from_string(ts));
//	std::cout<< date.time_of_day()<<"\n";
	//createMatches();
	createAction();
}