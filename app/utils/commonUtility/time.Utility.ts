import moment from 'moment';

export class TimeUtils {
  /**
   * === BASIC FORMATTING ===
   */
  static formatDefault(): string {
    return moment().format();
  }

  static formatFull(): string {
    return moment().format('MMMM Do YYYY, h:mm:ss a');
  }

  static formatDayName(): string {
    return moment().format('dddd');
  }

  static formatShort(): string {
    return moment().format('MMM Do YY');
  }

  static formatEscapedYear(): string {
    return moment().format('YYYY [escaped] YYYY');
  }

  /**
   * === RELATIVE TIME ===
   */
  static fromDateString(dateStr: string, format = 'YYYYMMDD'): string {
    return moment(dateStr, format).fromNow();
  }

  static fromStartOf(unit: moment.unitOfTime.StartOf): string {
    return moment().startOf(unit).fromNow();
  }

  static fromEndOf(unit: moment.unitOfTime.StartOf): string {
    return moment().endOf(unit).fromNow();
  }

  /**
   * === CALENDAR TIME ===
   */
  static calendarMinus(days: number): string {
    return moment().subtract(days, 'days').calendar();
  }

  static calendarNow(): string {
    return moment().calendar();
  }

  static calendarAdd(days: number): string {
    return moment().add(days, 'days').calendar();
  }

  /**
   * === LOCALE FORMATS ===
   */
  static getCurrentLocale(): string {
    return moment.locale();
  }

  static formatLT(): string {
    return moment().format('LT');
  }

  static formatLTS(): string {
    return moment().format('LTS');
  }

  static formatL(): string {
    return moment().format('L');
  }

  static formatl(): string {
    return moment().format('l');
  }

  static formatLL(): string {
    return moment().format('LL');
  }

  static formatll(): string {
    return moment().format('ll');
  }

  static formatLLL(): string {
    return moment().format('LLL');
  }

  static formatlll(): string {
    return moment().format('lll');
  }

  static formatLLLL(): string {
    return moment().format('LLLL');
  }

  static formatllll(): string {
    return moment().format('llll');
  }

  /**
   * === SET LOCALE (optional helper) ===
   */
  static setLocale(locale: string): void {
    moment.locale(locale);
  }

  /**
   * === SET HH:MM:SS ===
   */
  static formatMilliseconds(
    ms: number,
    options: { showHours?: boolean; showMinutes?: boolean; showSeconds?: boolean } = {
      showHours: true,
      showMinutes: true,
      showSeconds: true,
    }
  ): {
    seconds: number,
    minutes: number,
    hours: number,
  } {
    const duration = moment.duration(ms);

    const hours = Math.floor(duration.asHours());
    const minutes = duration.minutes();
    const seconds = duration.seconds();

    return {
      seconds,
      minutes,
      hours,
    }
  }

}
