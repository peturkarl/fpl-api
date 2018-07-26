import IBootstrapStatic from '../interfaces/IBootstrapStatic'
import IFixture from '../interfaces/IFixture'

export default class BootstrapStatic {
  constructor(data: IBootstrapStatic) {
    this.current_event = data['current-event']
    this.element_types = data.element_types
    this.elements = data.elements
    this.events = data.events
    this.game_settings = data['game-settings']
    this.last_entry_event = data['last-entry-event']
    this.next_event = data['next-event']
    this.next_event_fixtures = data.next_event_fixtures
    this.phases = data.phases
    this.stats = data.stats
    this.stats_options = data.stats_options
    this.teams = data.teams
    this.total_players = data['total-players']
  }

	current_event: number
	element_types: {
    id: number,
    plural_name: string,
    plural_name_short: string,
    singular_name: string,
    singular_name_short: string,
  }[]
	elements: {
    [key: string]: any,
    assists: number,
    bonus: number,
    bps: number,
    chance_of_playing_next_round: number,
    chance_of_playing_this_round: number,
    clean_sheets: number,
    code: number,
    cost_change_event: number,
    cost_change_event_fall: number,
    cost_change_start: number,
    cost_change_start_fall: number,
    creativity: string,
    dreamteam_count: number,
    ea_index: number,
    element_type: number,
    ep_next: string,
    ep_this: string,
    event_points: number,
    first_name: string,
    form: string,
    goals_conceded: number,
    goals_scored: number,
    ict_index: string,
    id: number,
    in_dreamteam: boolean,
    influence: string,
    loaned_in: number,
    loaned_out: number,
    loans_in: number,
    loans_out: number,
    minutes: number,
    news: string,
    news_added: number,
    now_cost: number,
    own_goals: number,
    penalties_missed: number,
    penalties_saved: number,
    photo: string,
    points_per_game: string,
    red_cards: number,
    saves: number,
    second_name: string,
    selected_by_percent: string,
    special: boolean,
    squad_number: number,
    status: string,
    team: number,
    team_code: number,
    threat: string,
    total_points: number,
    transfers_in: number,
    transfers_in_event: number,
    transfers_out: number,
    transfers_out_event: number,
    value_form: string,
    value_season: string,
    web_name: string,
    yellow_cards: number
  }[]
	events: {
    [key: string]: any,    
    average_entry_score: number,
    data_checked: number,
    deadline_time: string,
    deadline_time_epoch: number,
    deadline_time_formatted: string,
    deadline_time_game_offset: number,
    finished: boolean,
    highest_score: number,
    highest_scoring_entry: number,
    id: number,
    is_current: boolean,
    is_next: boolean,
    is_previous: boolean,
    name: string,
  }[]
	game_settings: {
		element_type: {
			bps_clean_sheets: number,
			bps_goals_scored: number,
			scoring_clean_sheets: number,
			scoring_goals_conceded: number,
			scoring_goals_scored: number,
			squad_max_play: number,
			squad_min_play: number,
			squad_select: number,
			sub_positions_locked?: number[],
			ui_shirt_specific: boolean
		},
		game: {
			bps_assists: number,
			bps_attempted_passes_limit: number,
			bps_big_chances_created: number,
			bps_big_chances_missed: number,
			bps_cbi_limit: number,
			bps_clearances_blocks_interceptions: number,
			bps_dribbles: number,
			bps_errors_leading_to_goal: number,
			bps_errors_leading_to_goal_attempt: number,
			bps_fouls: number,
			bps_key_passes: number,
			bps_long_play: number,
			bps_long_play_limit: number,
			bps_offside: number,
			bps_open_play_crosses: number,
			bps_own_goals: number,
			bps_pass_percentage_70: number,
			bps_pass_percentage_80: number,
			bps_pass_percentage_90: number,
			bps_penalties_conceded: number,
			bps_penalties_missed: number,
			bps_penalties_saved: number,
			bps_recoveries: number,
			bps_recoveries_limit: number,
			bps_red_cards: number,
			bps_saves: number,
			bps_short_play: number,
			bps_tackled: number,
			bps_tackles: number,
			bps_target_missed: number,
			bps_winning_goals: number,
			bps_yellow_cards: number,
			cup_start_event_id: number,
			currency_decimal_places: number,
			currency_multiplier: number,
			currency_symbol: string,
			default_formation: number[][],
			facebook_app_id: string,
			fifa_league_id: number,
			formations: {
        '1-2-5-3': number[][],
        '1-3-4-3': number[][],
        '1-3-5-2': number[][],
        '1-4-3-3': number[][],
        '1-4-4-2': number[][],
        '1-4-5-1': number[][],
        '1-5-2-3': number[][],
        '1-5-3-2': number[][],
        '1-5-4-1': number[][]        
      },
			game_timezone: string,
			league_h2h_tiebreak: string,
			league_join_private_max: number,
			league_join_public_max: number,
			league_max_ko_rounds_h2h: number,
			league_points_h2h_draw: number,
			league_points_h2h_lose: number,
			league_points_h2h_win: number,
			league_prefix_public: string,
			league_size_classic_max: number,
			league_size_h2h_max: number,
			photo_base_url: string,
			scoring_assists: number,
			scoring_bonus: number,
			scoring_bps: number,
			scoring_concede_limit: number,
			scoring_creativity: number,
			scoring_ea_index: number,
			scoring_ict_index: number,
			scoring_influence: number,
			scoring_long_play: number,
			scoring_long_play_limit: number,
			scoring_own_goals: number,
			scoring_penalties_missed: number,
			scoring_penalties_saved: number,
			scoring_red_cards: number,
			scoring_saves: number,
			scoring_saves_limit: number,
			scoring_short_play: number,
			scoring_threat: number,
			scoring_yellow_cards: number,
			squad_squadplay: number,
			squad_squadsize: number,
			squad_team_limit: number,
			squad_total_spend: number,
			static_game_url: string,
			support_email_address: string,
			sys_cdn_cache_enabled: boolean,
			sys_use_event_live_api: boolean,
			sys_vice_captain_enabled: boolean,
			transfers_cost: number,
			transfers_limit: number,
			transfers_sell_on_fee: number,
			transfers_type: string,
			ui_el_hide_currency_qi: boolean,
			ui_el_hide_currency_sy: boolean,
			ui_element_wrap: number,
			ui_selection_player_limit: number,
			ui_selection_price_gap: number,
			ui_selection_short_team_names: boolean,
			ui_show_home_away: boolean,
		}
	}
	last_entry_event: number
	next_event: number
	next_event_fixtures: IFixture[]
	phases: {
    id: number,
    name: string,
    start_event: number,
    stop_event: number
  }[]
	stats: {
    categories: null,
    headings: {
      abbr: string | null, 
      category: string | null,
      field: string,
      label: string
    }[]
  }
	stats_options: {
    [key: string]: any,
		key: string,
		name: string
	}[]
	teams: {
    [key: string]: any,
    code: number,
    current_event_fixture: IFixture[],
    draw: number,
    fixtures?: IFixture[],
    form: string | null,
    id: number,
    link_url: string,
    loss: number,
    name: String,
    next_event_fixture: IFixture[],
    played: number,
    points: number,
    position: number,
    short_name: string,
    strength: number,
    strength_attack_away: number,
    strength_attack_home: number,
    strength_defence_away: number,
    strength_defence_home: number,
    strength_overall_away: number,
    strength_overall_home: number,
    team_division: number,
    unavailable: boolean,
    win: number
  }[]
	total_players: number
}