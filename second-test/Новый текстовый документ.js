function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('�������� ���������?');
  }
}

var age = prompt('��� �������?');

if (checkAge(age)) {
  alert( '������ ��������' );
} else {
  alert( '� ������� ��������' );
}