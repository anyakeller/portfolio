function generateSeedCode ()
    % Edit these parameters to match your tray
    numrows = 5; 
    numcols = 5;
    stepover = 25.4 * .6;
    fileID = fopen('seedcode.gcode','w');

    % Generate code
    fprintf(fileID,"; Start at Eraser Zero\nG21 ; set units to millimeters\nG90 ; use absolute coordinates\nG92 X0 Y0; set XY zeros there\nG1 X31 Y19 ; Move to first seed position\nG92 X0 Y0; set XY zeros at first seed position\n\n@info Begin Seeding\nM280 P0 S105 ; Begin with hopper loaded, seeder closed\nG4 P100; Wait 0.1s\n");
    
    dropseed = "M280 P0 S101\nG4 P.01 \nM280 P0 S98\nG4 P.01 \nM280 P0 S95 \nG4 P.01 \nM280 P0 S92 \nG4 P.01 \nM280 P0 S89 \nG4 P.01 \nM280 P0 S86 \nG4 P.01 \nM280 P0 S83 \nG4 P.01 \nM280 P0 S80 \nG4 P.01 \nM280 P0 S77 \nG4 P.01 \nM280 P0 S74 \nG4 P.01 \nM280 P0 S71 \nG4 P.01 \nM280 P0 S68 \nG4 P.01 \nM280 P0 S65 \nG4 P.01 \nM280 P0 S62 \nG4 P.01 \nM280 P0 S59\nM280 P0 S105\n";

    for ycoord = (0:numrows)
        fprintf(fileID,"G1 Y%6.2f\n",ycoord * stepover);
        if mod(ycoord,2) == 0
            xcoords = 0:numcols;
        else
            xcoords = numcols:-1:0;
        end

        for xcoord = xcoords
            fprintf(fileID,"G1 X%6.2f\n",xcoord * stepover);
            fprintf(fileID,dropseed);
        end
    end
  
    fprintf(fileID, "\nG1 X-31 Y-19 ; Move back to Eraser Zero\nG92 X0 Y0 ; set XY zeros to Eraser Zero\n@info Done");

    fclose(fileID);
    
end