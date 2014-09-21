package com.example.aiti_app;

import android.os.Bundle;
import android.app.Activity;
import android.view.Menu;
import android.view.View;
import android.content.Intent;
import android.widget.EditText;
import android.widget.RadioButton;
import android.widget.RadioGroup;

public class MainActivity extends Activity {
	//public final static String EXTRA_MESSAGE = "com.example.aiti_app.MESSAGE";
	private RadioGroup radioSexGroup, radioTopicGroup;
	private RadioButton radioSexButton, radioTopicButton;
	@Override
	protected void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		setContentView(R.layout.activity_main);
		
//	addListenerOnButton();
	}

	@Override
	public boolean onCreateOptionsMenu(Menu menu) {
		// Inflate the menu; this adds items to the action bar if it is present.
		getMenuInflater().inflate(R.menu.main, menu);
		return true;
	}
	
	/** Called when the user clicks the Send button */
	public void sendMessage(View view) {
		radioSexGroup = (RadioGroup) findViewById(R.id.radioSex);
		int selectedId1 = radioSexGroup.getCheckedRadioButtonId();
		radioSexButton = (RadioButton) findViewById(selectedId1);
		
		radioTopicGroup = (RadioGroup) findViewById(R.id.radioTopic);
		int selectedId2 = radioTopicGroup.getCheckedRadioButtonId();
		radioTopicButton = (RadioButton) findViewById(selectedId2);
		
		EditText editText_name = (EditText) findViewById(R.id.edit_message);
		EditText editText_age = (EditText) findViewById(R.id.edit_message2);
		String message1 = editText_name.getText().toString();
		String message2 = editText_age.getText().toString();
		String message3 = radioSexButton.getText().toString();
		String message4 = radioTopicButton.getText().toString();
		Bundle b = new Bundle();
		b.putStringArray("EXTRA_MESSAGE", new String[]{message1, message2, message3, message4});
		Intent intent = new Intent(this, DisplayMessageActivity.class);
		intent.putExtras(b);
		startActivity(intent);
	}
}
