#pragma strict

var moveSpeed : float = 5;
var xSensitivity : float = 5;
var ySensitivity : float = 5;

function Update () {

	var h : float = Input.GetAxis("Horizontal") * Time.deltaTime * moveSpeed;
	var d : float = Input.GetAxis("Vertical") * Time.deltaTime * moveSpeed;

	var xRot : float = Input.GetAxis("Mouse X") * xSensitivity;
	var yRot : float = -Input.GetAxis("Mouse Y") * ySensitivity;

	transform.Translate(h,0,d);
	transform.Rotate(yRot, xRot, 0);

	if(Input.GetButtonDown("Jump")){

		rigidbody.velocity.y = 5;
	}

}

function OnTriggerEnter (death : Collider){

	Application.LoadLevel(1);
}