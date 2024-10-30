# makeGameCompleteSaveData

Marks game save data complete **for debugging purpose**. This only allows to make the dark hero with the save.

## Code Information

- **Name**: `makeGameCompleteSaveData`
- **Scope**: Azito
- **PAC Instruction (Binary)**: `25 1c 30 00`
- **Assembly Address in Memory** : `0x8b50248`

## Parameters

This function is parameterless.


## Example

Here is one example in hex:

```25 1c 30 00```

Which is interpreted as:

```c
makeGameCompleteSaveData()
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_Azito__08b50248(int param_1,undefined4 param_2)

{
  short sVar1;
  int iVar2;
  int iVar3;
  undefined4 uVar4;
  undefined auStack48 [16];
  undefined auStack32 [16];
  undefined4 local_10;
  int *local_c;
  int local_8;
  short *local_4;
  
  if (*(int *)(param_1 + 0x10) == 0) {
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    if (DAT_08bc63d8 == '\0') {
      _DAT_08bc63f0 = 0;
      _DAT_08bc63f4 = 0;
      _DAT_08bc63f8 = 0;
      _DAT_08bc63fc = 0;
      FUN_088044cc(&DAT_08bc63f0,FUN_Azito__08abb590,0x8bc63e0);
      DAT_08bc63d8 = '\x01';
    }
    iVar2 = Get_Execution_Pause_Phase(param_2);
    if (iVar2 == 3) {
      uVar4 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x204);
      iVar2 = FUN_Azito__08b51148(uVar4);
      if ((iVar2 == 4) || (iVar2 = FUN_Azito__08b51148(uVar4), iVar2 == 2)) {
        PAC::PAC_setCmdId(param_2,0);
      }
    }
    else if (iVar2 == 2) {
      iVar2 = FUN_08877b6c(1);
      iVar2 = FUN_08836f88(iVar2 + 0x10);
      *(byte *)(*(int *)(iVar2 + 4) + 0x75) = *(byte *)(*(int *)(iVar2 + 4) + 0x75) | 0x40;
      uVar4 = *(undefined4 *)(*(int *)(param_1 + 0x10) + 0x204);
      FUN_Azito__08b50db0(uVar4,1);
      FUN_Azito__08b51158(uVar4,1);
      Pause_Execution(param_2,3);
    }
    else if (iVar2 == 1) {
      iVar2 = *(int *)(param_1 + 0x10);
      iVar3 = FUN_08a2182c(*(undefined4 *)(iVar2 + 0x224));
      if (iVar3 == 0) {
        FUN_Azito__08b504e0(auStack48);
        FUN_Azito__08b504f8(auStack48,iVar2 + 0x21c);
        FUN_Azito__08abb590(auStack48,0xffffffff);
        Pause_Execution(param_2,2);
      }
    }
    else if (iVar2 == 0) {
      iVar2 = *(int *)(param_1 + 0x10);
      uVar4 = Save::Get_Save_BaseAddr();
      FUN_088505c4(&local_10,uVar4,0);
      FUN_Azito__08b50540(auStack32,&local_10);
      FUN_Azito__08b504f8(auStack32,iVar2 + 0x21c);
      FUN_Azito__08abb590(auStack32,0xffffffff);
      if (local_8 != 0) {
        *local_4 = *local_4 + -1;
        if (local_4 == (short *)0x0) {
          sVar1 = 0;
        }
        else {
          sVar1 = *local_4;
        }
        if (sVar1 == 0) {
          (**(code **)(*local_c + 0xc))(local_c,local_8,local_4,local_10);
          FUN_Azito__08abead0(local_8,local_10);
        }
      }
      iVar3 = Save::Get_Save_BaseAddr(1);
      *(undefined4 *)(*(int *)(iVar3 + 0x48) + 0xc9c) = 1;
      FUN_08a216b0(*(undefined4 *)(iVar2 + 0x224),3,0);
      Pause_Execution(param_2,1);
    }
  }
  return;
}
```

