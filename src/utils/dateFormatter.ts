import moment, {DurationInputArg1, DurationInputArg2} from 'moment';

moment.locale('pt-BR');

function now(inp?: moment.MomentInput) {
  return inp ? moment(inp).format() : moment().format();
}

function subtract(amount: DurationInputArg1, unit: DurationInputArg2, inp?: moment.MomentInput) {
  return inp ?
    moment(inp).subtract(amount, unit).format() :
    moment().subtract(amount, unit).format();
}

export {now, subtract};
