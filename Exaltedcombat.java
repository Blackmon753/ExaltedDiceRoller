
package exaltedcombat;

import java.awt.FlowLayout;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;
import javax.swing.JButton;
import javax.swing.JCheckBox;
import javax.swing.JLabel;
import javax.swing.JTextField;


/**
 * Dice roller for Exalted 3rd edition.   Probably usable for older editions as well but I don't remember. 
 * @author Original Dad
 */
public class Exaltedcombat extends javax.swing.JFrame implements ActionListener {
    private final JTextField textField;
    private final JLabel result; 
    private final JCheckBox d9 = new JCheckBox("Double 9s", false);
    private final JCheckBox d8 = new JCheckBox("Double 8s", false);
    private final JCheckBox r1 = new JCheckBox("Reroll 1s", false);             
    private final JCheckBox r6 = new JCheckBox("Reroll 6s", false);
    private final JCheckBox s1 = new JCheckBox("1s remove successes", false);
    
    public Exaltedcombat() {
    super ("Dice rollah"); //Title of the box.  Not very creative.
       
       setLayout(new FlowLayout());
       
       textField = new JTextField("1", 10);  //creates a field to input the amount of dice to be rolled.
       add(textField);
       
       JButton button = new JButton("Submit");  //submit button
       button.addActionListener(this);
       add(button);
       
       result = new JLabel("Successes");  //Gives instructions and then changes to the result when the submit button is clicked.
       add(result);
       add(d9);
       add(d8);
       add(r1);    //Shit's ugly but it works. 
       add(r6);
       add(s1);
             
    }
    
   public boolean dou9() {
       if(d9.isSelected()){
           return true;
       }else {
           return false;
       }
   } 
   
   public boolean reroll6() {
       if(r6.isSelected()){
           return true;
       }else {
           return false;
       }
   } 
   
   public boolean subtract1() {
       if(s1.isSelected()){
           return true;
       }else {
           return false;
       }
   } 
   
   public boolean dou8() {
       if(d8.isSelected()){
           return true;
       }else {
           return false;
       }
   }
    
   public boolean re1() {
       if(r1.isSelected()){
           return true;
       }else {
           return false;
       }
   }
    public int getDice() {
        
        int i = Integer.parseInt(textField.getText());
        return i;
    }
    
    public void success() {
        Random rand = new Random();
        int succ = 0;
        int dice = getDice();
        boolean check9 = dou9();
        boolean check8 = dou8();
        boolean check1 = re1();
        boolean reroll6s = reroll6();
        boolean remove1 = subtract1();
    
    for(int i = 0; i < dice; i++){
        int roll = rand.nextInt(10);
        
        if (check1 == true && roll ==1){
            i--;
                
        }else if (remove1 == true && roll ==1){
            succ--;
                
        }else if (reroll6s == true && roll ==6){
            i--;
        }else if (check9 == true && roll ==9){    //Almost certainly not the best way to handle this but it does work. 
            succ+=2;
            
        }else if (check8 == true && roll==8){
            succ+=2;
        
        }else if(roll >= 8){
            succ++;
    
        }else if(roll ==10){
            succ+=2;
    }
    }
        String successes = Integer.toString(succ);
        result.setText(successes);
        
    }
 

    @Override
    public void actionPerformed(ActionEvent e){  
                        
           success();  
    }

}
