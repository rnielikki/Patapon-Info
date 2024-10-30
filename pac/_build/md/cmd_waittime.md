# cmd_waitTime

Wait for certain time before executing the next instruction.

This pauses pac instruction execution for the given time.

## Code Information

- **Name**: `cmd_waitTime`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 00 10 00`
- **Assembly Address in Memory** : `0x88384e0`

## Parameters

- `(float)waiting_time` *(8 bytes)* : Time **as second** to wait before executing the next instruction.

## Example

Here is one example in hex:

```25 00 10 00 / 20 00 00 00 / 02 00 00 00```

Which is interpreted as:

```c
cmd_waitTime((float *)fVar2)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_088384e0(undefined4 param_1,undefined4 param_2)

{
  int iVar1;
  float *pfVar2;
  uint uVar3;
  int iVar4;
  float fVar5;
  
  iVar1 = Get_Execution_Pause_Phase(param_2);
  if (iVar1 == 0) {
    pfVar2 = (float *)Pac_Get_Param(param_2,0,1,4);
    uVar3 = FUN_0883bbcc(param_2);
    if ((int)uVar3 < 0) {
      fVar5 = (float)(uVar3 >> 1 | uVar3 & 1);
      fVar5 = fVar5 + fVar5;
    }
    else {
      fVar5 = (float)uVar3;
    }
    Set_Remaining_Time(param_2,(int)(*pfVar2 * fVar5));
    Pause_Execution(param_2,1);
  }
  iVar1 = Get_Remaining_Time(param_2);
  if (iVar1 < 1) {
    Set_Remaining_Time(param_2,0);
    PAC::PAC_setCmdId(param_2,0);
  }
  else {
    iVar1 = Get_Time_Between(param_2);
    iVar4 = Get_Remaining_Time(param_2);
    Set_Remaining_Time(param_2,iVar4 - iVar1);
  }
  return;
}
```

