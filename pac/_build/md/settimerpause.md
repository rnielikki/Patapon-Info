# setTimerPause

Pauses or resumes the timer.

## Code Information

- **Name**: `setTimerPause`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 16 a2 00`
- **Assembly Address in Memory** : `0x8922910`

## Parameters

- `(bool)is_pause` *(8 bytes)* : 0 resumes the timer, 1 pauses the timer.
- `(bool)display` *(8 bytes)* : 0 hides the timer, 1 still displays the timer.

## Example

Here is one example in hex:

```25 16 a2 00 / 02 00 00 00 / 01 00 00 00 / 02 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
setTimerPause((int)1, (int)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08922910(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  if ((((*(int *)(param_1 + 0x10) != 0) &&
       (iVar3 = *(int *)(*(int *)(param_1 + 0x10) + 0x2b8), iVar3 != 0)) &&
      (iVar3 = *(int *)(iVar3 + 0x2c), iVar3 != 0)) && (iVar3 = *(int *)(iVar3 + 100), iVar3 != 0))
  {
    *(bool *)(iVar3 + 0x1f2) = *piVar1 != 0;
    *(bool *)(iVar3 + 499) = *piVar2 != 0;
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

