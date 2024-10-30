# startTimer

Intialises and enables the timer.

Related guide: [How To: Add A Timer](./guide/how-to-add-a-timer.md)

## Code Information

- **Name**: `startTimer`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 9d 00`
- **Assembly Address in Memory** : `0x89225d4`

## Parameters

- `(float)time` *(8 bytes)* :  Time to set to the timer, as *seconds*.
- `(bool)is_incremental` *(8 bytes)* : If it is zero, the timer will decrease. Otherwise, it will increase.

## Example

Here is one example in hex:

```25 16 9d 00 / 10 00 00 00 / 00 00 f0 41 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
startTimer((float)30, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_089225d4(int param_1,undefined4 param_2)

{
  float *pfVar1;
  int *piVar2;
  int iVar3;
  
  pfVar1 = (float *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
      (iVar3 = *(int *)(iVar3 + 0x2c), iVar3 != 0)) && (*(int *)(iVar3 + 100) != 0)) {
    if (*piVar2 == 0) {
      if (*pfVar1 != -1.0) {
        func_0x08b32d90();
      }
    }
    else {
      func_0x08b32df8(*pfVar1);
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```
