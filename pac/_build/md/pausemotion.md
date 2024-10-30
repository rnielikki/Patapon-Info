# pauseMotion

Pauses the animation.

Please describe difference from [stopMotion](./stopmotion.md).

## Code Information

- **Name**: `pauseMotion`
- **Scope**: Global
- **PAC Instruction (Binary)**: `25 17 3b 00`
- **Assembly Address in Memory** : `0x8914d34`

## Parameters

- `(int *)handle_id` *(8 bytes)* : The target [handle](./guide/how-to-get-a-handle.md).
- `(int)pause` *(8 bytes)* : 0 is resume, 1 is pause.
- `(float)fVar1` *(8 bytes)* : Keep this as zero. (Supposed to be time related but doesn't work correctly)

## Example

Here is one example in hex:

```25 17 3b 00 / 04 00 00 00 / 00 00 00 00 / 02 00 00 00 / 01 00 00 00 / 10 00 00 00 / 00 00 00 00```

Which is interpreted as:

```c
pauseMotion((int *)iVar0, (int)1, (float)0)
```

## Code

Ths PAC instruction calls this function (Decompiled by Ghidra):

```c
void FUN_08914d34(int param_1,undefined4 param_2)

{
  int *piVar1;
  int *piVar2;
  float *pfVar3;
  int iVar4;
  int iVar5;
  float fVar6;
  float fVar7;
  undefined local_c;
  undefined local_b;
  undefined local_a;
  undefined local_9;
  undefined4 local_8;
  uint local_4;
  
  piVar1 = (int *)Pac_Get_Param(param_2,0,1,4);
  piVar2 = (int *)Pac_Get_Param(param_2,1,1,4);
  pfVar3 = (float *)Pac_Get_Param(param_2,2,1,4);
  if (*piVar1 != -1) {
    iVar4 = Find_Target_By_HandleID(*(undefined4 *)(param_1 + 0x14),*piVar1,1);
    if (iVar4 == 0) {
      iVar4 = 0;
    }
    if (((iVar4 != 0) && (iVar4 = *(int *)(iVar4 + 200), iVar4 != 0)) &&
       (iVar5 = *(int *)(iVar4 + 0x1e8), iVar5 != 0)) {
      if (*pfVar3 <= 0.0) {
        *(bool *)(iVar4 + 0xb9) = *piVar2 != 0;
      }
      else {
        *(undefined *)(iVar5 + 0xb9) = 1;
        fVar7 = *pfVar3;
        if (*piVar2 == 0) {
          local_c = 0xfe;
          fVar6 = fVar7 * 4800.0;
          if (fVar6 < 2.147484e+09) {
            local_4 = (uint)fVar6;
          }
          else {
            local_4 = (int)(fVar6 - 2.147484e+09) | 0xffff8000;
          }
          if (fVar7 < 0.0) {
            local_4 = 0;
          }
        }
        else {
          local_c = 0xff;
          fVar6 = fVar7 * 4800.0;
          if (fVar6 < 2.147484e+09) {
            local_4 = (uint)fVar6;
          }
          else {
            local_4 = (int)(fVar6 - 2.147484e+09) | 0xffff8000;
          }
          if (fVar7 < 0.0) {
            local_4 = 0;
          }
        }
        local_a = fVar7 < 0.0;
        local_8 = 0;
        local_9 = 1;
        local_b = 0;
        FUN_08981000(iVar5,&local_c);
      }
    }
  }
  PAC::PAC_setCmdId(param_2,0);
  return;
}
```

