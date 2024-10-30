# disableEquipBigShield

Disarms the greatshield, if the target unit has it. Used in ending cutscene (ascending with drum).

## Code Information

- **Name**: `disableEquipBigShield`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 42 01`
- **Assembly Address in Memory** : `0x892b34c`

## Parameters

- `(int)unit_handle` *(8 bytes)* : Handle of the unit to disarm the greatshield.

## Example

Here is one example in hex:

```25 16 42 01 / 08 00 00 00 / ca 00 00 00```

Which is interpreted as:

```c
disableEquipBigShield(((global)int *)giVar202)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_0892b34c(int param_1,undefined4 param_2)

{
  short sVar1;
  undefined4 *puVar2;
  int iVar3;
  int iVar4;
  undefined4 uVar5;
  int iVar6;
  int iVar7;
  int iVar8;
  int iVar9;
  int *piVar10;
  
  puVar2 = (undefined4 *)Pac_Get_Param(param_2,0,1,4);
  iVar3 = Find_Target_By_HandleID(*(undefined4 *)(*(int *)(param_1 + 0x10) + 0xe8),*puVar2,1);
  if (((iVar3 != 0) && (iVar4 = (**(code **)(*(int *)(iVar3 + 4) + 0x34))(iVar3), iVar4 == 9)) &&
     (iVar3 != 0)) {
    iVar8 = 0;
    iVar4 = iVar3;
    do {
      iVar7 = 0;
      iVar9 = iVar4;
      do {
        if (iVar8 < 8) {
          if (iVar7 < 3) {
            piVar10 = *(int **)(iVar9 + 0x8d4);
          }
          else {
            piVar10 = (int *)0x0;
          }
        }
        else {
          piVar10 = (int *)0x0;
        }
        if (piVar10 != (int *)0x0) {
          sVar1 = (**(code **)(*piVar10 + 0x24))(piVar10);
          uVar5 = Save::Get_Save_BaseAddr(1);
          iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
          uVar5 = Param::Get_Data_Addr(*(undefined4 *)(iVar6 + 0xa4),9);
          iVar6 = Param::Get_Line_Addr(uVar5,0,(int)sVar1,1);
          if ((iVar6 != 0) && (sVar1 = *(short *)(iVar6 + 6), -1 < sVar1)) {
            uVar5 = Save::Get_Save_BaseAddr(1);
            iVar6 = Save::Get_BaseAddr__0x78(uVar5,1);
            uVar5 = Param::Get_Data_Addr(*(undefined4 *)(iVar6 + 0xa4),0x1c);
            iVar6 = Param::Get_Line_Addr(uVar5,0,(int)sVar1,1);
            if ((iVar6 != 0) &&
               ((*(char *)(iVar6 + 8) == '\x03' && (*(char *)(iVar6 + 9) == '\x1a')))) {
              FUN_088bb784(iVar3,piVar10);
            }
          }
        }
        iVar7 = iVar7 + 1;
        iVar9 = iVar9 + 4;
      } while (iVar7 < 3);
      iVar8 = iVar8 + 1;
      iVar4 = iVar4 + 0xc;
    } while (iVar8 < 8);
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

