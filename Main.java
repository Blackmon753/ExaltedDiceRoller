/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package exaltedcombat;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        Exaltedcombat Exaltedcombat = new Exaltedcombat();
        Exaltedcombat.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        Exaltedcombat.setSize(300, 150);
        Exaltedcombat.setVisible(true);  
        Exaltedcombat.setLocationRelativeTo(null);  //makes the box appear in the center of the screen, makes it visible, declares the size and allows the program to be killed by closing the window.
        
    }
}
