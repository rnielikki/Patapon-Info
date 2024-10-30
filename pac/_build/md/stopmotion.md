# stopMotion

Stop the animation.

Please describe difference from [pauseMotion](./pausemotion.md).

## Code Information

- **Name**: `stopMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3a 00`
- **Assembly Address in Memory** : `0x8914c6c`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(float)fVar1` *(8 bytes)* : Does nothing, can keep as zero.

## Example

Here is one example in hex:

```25 17 3a 00 / 04 00 00 00 / 36 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
stopMotion((int *)iVar54, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914c6c(int param_1,undefined4 param_2)

{
  int *piVar1;
  int iVar2;
  int iVar3;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  Pac_Get_Param(param_2,1,1,4);
  if (*piVar1 != -1) {
    iVar2 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar2 == 0) {
      iVar2 = 0;
    }
    if (((iVar2 != 0) && (iVar2 = *(int *)(iVar2 + 200), iVar2 != 0)) &&
       (iVar3 = *(int *)(iVar2 + 0x1e8), iVar3 != 0)) {
      *(undefined *)(iVar2 + 0xb9) = 1;
      FUN_08980a8c(iVar3);
      *(undefined *)(iVar3 + 0xb9) = 0;
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

