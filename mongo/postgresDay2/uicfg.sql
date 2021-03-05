
drop table app_right;
CREATE TABLE app_right (
    right_name varchar(320) NOT NULL,
	"options" varchar(2048) NULL
);
insert into app_right(right_name, options)
values('UICFG_RES_XT_STRUCT_QUALITY', 'Must Answer,Hide Default,Is Hidden,PushPin counts as Answer,Show in Primary section,Show Unknown Option,Auto Confirm Default,Hide Details');
insert into app_right(right_name, options)
values('UICFG_RES_XTOL_KITCHEN', 'Must Answer,Hide Default,Is Hidden,PushPin counts as Answer,Show in Primary section,Show Unknown Option,Auto Confirm Default,Hide Details');

drop table group_defaults;
CREATE TABLE group_defaults (
	group_id numeric(10) NOT NULL,
	right_name varchar(320) NOT NULL,
	value varchar(4000) NULL
);
insert into group_defaults (GROUP_ID, right_name, value)
values(0, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2000111, 'UICFG_RES_XT_STRUCT_QUALITY', '17');
insert into group_defaults (GROUP_ID, right_name, value)
values(2000222, 'UICFG_RES_XT_STRUCT_QUALITY', '18');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001001, 'UICFG_RES_XT_STRUCT_QUALITY', '2');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001008, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001009, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001010, 'UICFG_RES_XT_STRUCT_QUALITY', '20');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001014, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001015, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001018, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001022, 'UICFG_RES_XT_STRUCT_QUALITY', '32');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001023, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001026, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001033, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001036, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001038, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001039, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001040, 'UICFG_RES_XT_STRUCT_QUALITY', '8');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001042, 'UICFG_RES_XT_STRUCT_QUALITY', '2');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001044, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2010522, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2014068, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2022352, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2022822, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2023702, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2025181, 'UICFG_RES_XT_STRUCT_QUALITY', '80');
insert into group_defaults (GROUP_ID, right_name, value)
values(2032795, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2033724, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2040018, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2055555, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2081259, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087355, 'UICFG_RES_XT_STRUCT_QUALITY', '24');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087356, 'UICFG_RES_XT_STRUCT_QUALITY', '26');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087357, 'UICFG_RES_XT_STRUCT_QUALITY', '25');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087358, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087359, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087360, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2125713, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2133576, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2133577, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2220550, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2221113, 'UICFG_RES_XT_STRUCT_QUALITY', '48');
insert into group_defaults (GROUP_ID, right_name, value)
values(2222222, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2224272, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2224736, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2228276, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2231551, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2237675, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2251950, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2252591, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2255556, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2259113, 'UICFG_RES_XT_STRUCT_QUALITY', '5');
insert into group_defaults (GROUP_ID, right_name, value)
values(2292244, 'UICFG_RES_XT_STRUCT_QUALITY', '18');
insert into group_defaults (GROUP_ID, right_name, value)
values(2302400, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2318080, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2330472, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2332300, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2333333, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2334455, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2335571, 'UICFG_RES_XT_STRUCT_QUALITY', '3');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339600, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339604, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339615, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(233960, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2345612, 'UICFG_RES_XT_STRUCT_QUALITY', '21');
insert into group_defaults (GROUP_ID, right_name, value)
values(2346926, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2353284, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2405020, 'UICFG_RES_XT_STRUCT_QUALITY', '2');
insert into group_defaults (GROUP_ID, right_name, value)
values(2405400, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2423407, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2436332, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2436334, 'UICFG_RES_XT_STRUCT_QUALITY', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2456580, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2468850, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2495500, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2496419, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2537937, 'UICFG_RES_XT_STRUCT_QUALITY', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2546011, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2553188, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2555555, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2578542, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2602904, 'UICFG_RES_XT_STRUCT_QUALITY', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2620061, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2621061, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2622379, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2624567, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2645901, 'UICFG_RES_XT_STRUCT_QUALITY', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2666666, 'UICFG_RES_XT_STRUCT_QUALITY', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(0, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(562698, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2000111, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2000222, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001001, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001008, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001009, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001010, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001014, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001015, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001018, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001022, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001023, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001026, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001033, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001036, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001038, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001039, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001040, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001042, 'UICFG_RES_XTOL_KITCHEN', '2');
insert into group_defaults (GROUP_ID, right_name, value)
values(2001044, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2010522, 'UICFG_RES_XTOL_KITCHEN', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2014068, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2022352, 'UICFG_RES_XTOL_KITCHEN', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2022822, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2023702, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2025181, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2032795, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2033724, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2040018, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2055555, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2081259, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087355, 'UICFG_RES_XTOL_KITCHEN', '24');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087356, 'UICFG_RES_XTOL_KITCHEN', '26');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087357, 'UICFG_RES_XTOL_KITCHEN', '25');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087358, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087359, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2087360, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2125713, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2133576, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2133577, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2220550, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2221113, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2222222, 'UICFG_RES_XTOL_KITCHEN', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2224272, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2224736, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2228276, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2231551, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2237675, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2251950, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2252591, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2255556, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2259113, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2292244, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2302400, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2318080, 'UICFG_RES_XTOL_KITCHEN', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2330472, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2332300, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2333333, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2334455, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2335571, 'UICFG_RES_XTOL_KITCHEN', '3');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339600, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339604, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2339615, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(233960, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2345612, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2346926, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2353284, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2405020, 'UICFG_RES_XTOL_KITCHEN', '2');
insert into group_defaults (GROUP_ID, right_name, value)
values(2405400, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2423407, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2436332, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2436334, 'UICFG_RES_XTOL_KITCHEN', '33');
insert into group_defaults (GROUP_ID, right_name, value)
values(2456580, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2468850, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2495500, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2496419, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2537937, 'UICFG_RES_XTOL_KITCHEN', '4');
insert into group_defaults (GROUP_ID, right_name, value)
values(2546011, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2553188, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2555555, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2578542, 'UICFG_RES_XTOL_KITCHEN', '64');
insert into group_defaults (GROUP_ID, right_name, value)
values(2602904, 'UICFG_RES_XTOL_KITCHEN', '1');
insert into group_defaults (GROUP_ID, right_name, value)
values(2620061, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2621061, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2622379, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2624567, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2645901, 'UICFG_RES_XTOL_KITCHEN', '0');
insert into group_defaults (GROUP_ID, right_name, value)
values(2666666, 'UICFG_RES_XTOL_KITCHEN', '64');