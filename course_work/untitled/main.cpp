#include <iostream>
#include <vector>
#include <fstream>
#include <algorithm>

static constexpr int s_iCountrySize = 1000;
static constexpr int s_iCitySize = 10000;
static constexpr int s_iStadiumSize = 30000;
static constexpr int s_iTeamSize = 20000;
static constexpr int s_iTrainerSize = 30000;
static constexpr int s_iPlayerRoleSize = 20;
static constexpr int s_iPlayerSize = 100000;
static constexpr int s_iMatchSize = 35000;
static constexpr int s_iActionTypeSize = 6;
static constexpr int s_iActionSize = 1000000;

class TypesGenerator {
	protected:
	TypesGenerator()=default;
	virtual ~TypesGenerator()=default;
	
	public:
	static std::string GenerateString(int length) {
		srand(time(NULL));
		auto str = std::string();
		for(auto i=0;i<length;++i) {
			str += char(50 + rand() % 60);
		}
		return str;
	}
	
	static int GenerateInt(int lhs, int rhs) {
		srand(time(NULL));
		return lhs + rand() % (rhs - lhs);
	}
	
	static int GenerateTimeStamp(const std::string& lhs, const std::string& rhs) {
		auto lhsVec = ParseTimeStamp(lhs);
		auto rhsVec = ParseTimeStamp(rhs);
		auto vec = std::vector<int>();
		
	}
	
	public:
	static std::vector<std::string> SplitString(const std::string& str, const char& delim) {
		auto it = str.begin();
		auto oldIt = str.begin();
		auto vec = std::vector<std::string>();
		while( ( it = std::find( oldIt, str.end(), delim ) ) != str.end() ) {
			auto substr = str.substr( oldIt - str.begin(), it - str.begin() );
			if( not ( substr.size()==1 and substr[0]==delim ) ) vec.emplace_back(substr);
			oldIt = ++it;
		}
		vec.emplace_back( str.substr( oldIt - str.begin(), std::string::npos) );
		return vec;
	}
	
	static std::vector<int> ParseTimeStamp(const std::string& stamp) {
		auto spaceIt = std::find(stamp.begin(), stamp.end(), ' ');
		auto date = stamp.substr(0, spaceIt - stamp.begin());
		auto time = stamp.substr(spaceIt + 1 - stamp.begin(), std::string::npos);
		auto dateVec = SplitString(date, '-');
		auto timeVec = SplitString(time, ':');
		auto intDateVec = StringVecToIntVec(dateVec);
		auto intTimeVec = StringVecToIntVec(timeVec);
		std::copy(intTimeVec.begin(), intTimeVec.end(), std::back_inserter(intDateVec));
		return intDateVec;
	}
	
	static std::vector<int> StringVecToIntVec(const std::vector<std::string>& vec) {
		auto vv = std::vector<int>();
		for(auto& v : vec) vv.emplace_back(atoi(v.c_str()));
		return vv;
	}
};

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

int main() {
	
	//createStadiums();
	createTeam();
	return 0;
}